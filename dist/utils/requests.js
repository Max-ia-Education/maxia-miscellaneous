import { jsx as _jsx } from "react/jsx-runtime";
import Axios, { isAxiosError } from "axios";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import { z } from "zod";
import Bugsnag from "@bugsnag/js";
import { useLink } from "./hooks";
export const axiosDefaults = Axios.defaults;
function getErrorMessageComponent(error) {
    return ({ className = 'f14 mt-3 red text-center' }) => {
        if (!isAxiosError(error))
            return null;
        return (_jsx("span", { className: className, children: error.response?.data?.message || 'Erro interno do servidor.' }));
    };
}
const hour = 60 * 60 * 1000;
function getSchema(url, params = {}, schema, version = 1) {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async () => Axios.get(url, { params: params, baseURL })
        .then(res => res.data).then(data => schema?.parse(data) ?? data);
}
export function useGet({ url, schema, params, additional_params, version = 1 }) {
    if (!(typeof url === 'string')) {
        url = useLink(url);
    }
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
export function usePost({ url, additional_params = {}, headers = false, version = 1 }) {
    if (!(typeof url === 'string')) {
        url = useLink(url);
    }
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
export function usePatch({ url, additional_params = {}, headers = false, version = 1 }) {
    if (!(typeof url === 'string')) {
        url = useLink(url);
    }
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
export function usePut({ url, additional_params = {}, headers = false, version = 1 }) {
    if (!(typeof url === 'string')) {
        url = useLink(url);
    }
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
const _delete = (url, version = 1) => {
    const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/');
    return async (params) => Axios.delete(url, { ...params, baseURL }).then(res => res.data);
};
export const useDelete = (url, additional_params = {}) => {
    return useMutation([url], _delete(url), {
        ...additional_params
    });
};
export const useClient = () => {
    return useQueryClient();
};
export const usePrefetchQuery = (url, schema) => {
    const { refetch } = useGet({ url, schema, additional_params: { enabled: false } });
    return refetch;
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
