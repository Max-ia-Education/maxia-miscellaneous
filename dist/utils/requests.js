import { jsx as _jsx } from "react/jsx-runtime";
import Axios, { isAxiosError } from "axios";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import { z } from "zod";
import Bugsnag from "@bugsnag/js";
export const axiosDefaults = Axios.defaults;
function getErrorMessageComponent(error) {
    return ({ className = 'f14 mt-3 red text-center' }) => {
        if (!isAxiosError(error))
            return null;
        return (_jsx("span", { className: className, children: error.response?.data?.message || 'Erro interno do servidor.' }));
    };
}
const get = (url, params = {}) => {
    const baseUrl = Axios.defaults.baseURL + 'api/v1/';
    return async () => Axios.get(url, { params: params, baseURL: baseUrl }).then(res => res.data);
};
const hour = 60 * 60 * 1000;
function useGet(url, params = {}, additional_params) {
    let queryKey = [url];
    queryKey.push(JSON.stringify(params));
    return {
        ...useQuery(queryKey, get(url, params), {
            cacheTime: 7 * 24 * hour,
            staleTime: 7 * 24 * hour,
            refetchInterval: 24 * hour,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
            useErrorBoundary: (e) => e.response?.status >= 500,
            ...additional_params ?? {}
        }),
        queryKey
    };
}
function getSchema(url, params = {}, schema, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async () => Axios.get(url, { params: params, baseURL })
        .then(res => res.data).then(data => schema?.parse(data) ?? data);
}
export function useGetSchema(url, schema, params = {}, additional_params, version = 1) {
    let queryKey = [url];
    queryKey.push(JSON.stringify(params));
    return {
        ...useQuery(queryKey, getSchema(url, params, schema, version), {
            cacheTime: 7 * 24 * hour,
            staleTime: 7 * 24 * hour,
            refetchInterval: 24 * hour,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
            useErrorBoundary: (e) => e.response?.status >= 500 || (e instanceof z.ZodError),
            ...additional_params ?? {}
        }),
        queryKey
    };
}
export function useGetSchemaV2({ url, schema, params, additional_params, version = 1 }) {
    let queryKey = [url];
    queryKey.push(JSON.stringify(params));
    return {
        ...useQuery(queryKey, getSchema(url, params, schema, version), {
            cacheTime: 7 * 24 * hour,
            staleTime: 7 * 24 * hour,
            refetchInterval: 24 * hour,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
            useErrorBoundary: (e) => e.response?.status >= 500 || (e instanceof z.ZodError),
            ...additional_params ?? {}
        }),
        queryKey
    };
}
function post(url, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.post(url, { params: params, ...params }, { baseURL })
        .then(res => res.data).catch(error => {
        error.response?.status >= 500 && Bugsnag.notify(error, e => {
            e.addMetadata('request', { params, error });
        });
        throw error;
    });
}
function postFull(url, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.post(url, { params: params, ...params }, { baseURL })
        .catch(error => {
        error.response?.status >= 500 && Bugsnag.notify(error, e => {
            e.addMetadata('request', { params, error });
        });
        throw error;
    });
}
function usePost(url, additional_params = {}, headers = false) {
    return useMutation([url], (headers ? postFull(url) : post(url)), {
        retry: false,
        ...additional_params
    });
}
export function usePostV2({ url, additional_params = {}, headers = false, version = 1 }) {
    let queryKey = [url];
    const mutation = useMutation([url], (headers ? postFull(url, version) : post(url, version)), {
        retry: false,
        ...additional_params
    });
    const ErrorMessageComponent = getErrorMessageComponent(mutation.error);
    return {
        ...mutation,
        queryKey,
        ErrorMessageComponent
    };
}
// PATCH
function patch(url, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.patch(url, { params: params, ...params }, { baseURL })
        .then(res => res.data).catch(error => {
        error.response?.status >= 500 && Bugsnag.notify(error, e => {
            e.addMetadata('request', { params, error });
        });
        throw error;
    });
}
function patchFull(url, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.patch(url, { params: params, ...params }, { baseURL })
        .catch(error => {
        error.response?.status >= 500 && Bugsnag.notify(error, e => {
            e.addMetadata('request', { params, error });
        });
        throw error;
    });
}
function usePatch(url, additional_params = {}, headers = false) {
    return useMutation([url], (headers ? patchFull(url) : patch(url)), {
        retry: false,
        ...additional_params
    });
}
export function usePatchV2({ url, additional_params = {}, headers = false, version = 1 }) {
    let queryKey = [url];
    const mutation = useMutation([url], (headers ? patchFull(url, version) : patch(url, version)), {
        retry: false,
        ...additional_params
    });
    const ErrorMessageComponent = getErrorMessageComponent(mutation.error);
    return {
        ...mutation,
        queryKey,
        ErrorMessageComponent
    };
}
// PUT
function put(url, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.put(url, { params: params, ...params }, { baseURL })
        .then(res => res.data).catch(error => {
        error.response?.status >= 500 && Bugsnag.notify(error, e => {
            e.addMetadata('request', { params, error });
        });
        throw error;
    });
}
function putFull(url, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.put(url, { params: params, ...params }, { baseURL })
        .catch(error => {
        error.response?.status >= 500 && Bugsnag.notify(error, e => {
            e.addMetadata('request', { params, error });
        });
        throw error;
    });
}
export function usePut(url, additional_params = {}, headers = false) {
    return useMutation([url], (headers ? putFull(url) : put(url)), {
        retry: false,
        ...additional_params
    });
}
export function usePutV2({ url, additional_params = {}, headers = false, version = 1 }) {
    let queryKey = [url];
    const mutation = useMutation([url], (headers ? putFull(url, version) : put(url, version)), {
        retry: false,
        ...additional_params
    });
    const ErrorMessageComponent = getErrorMessageComponent(mutation.error);
    return {
        ...mutation,
        queryKey,
        ErrorMessageComponent
    };
}
const _delete = (url) => {
    return async (params) => Axios.delete(url, params).then(res => res.data);
};
const useDelete = (url, additional_params = {}) => {
    return useMutation([url], _delete(url), {
        ...additional_params
    });
};
const useClient = () => {
    return useQueryClient();
};
const prefetchQuery = async (url, client) => {
    await client.prefetchQuery([url, '{}'], get(url), {
        cacheTime: 7 * 24 * 60 * 60 * 1000,
        staleTime: 7 * 24 * 60 * 60 * 1000,
        retry: 1
    });
};
export function useDummyRequest() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return isLoading;
}
export { useGet, usePost, useClient, get, prefetchQuery, useDelete, usePatch };
