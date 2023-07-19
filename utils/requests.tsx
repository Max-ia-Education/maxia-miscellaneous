import Axios, { isAxiosError } from "axios";
import { useQuery, useMutation, useQueryClient, UseQueryOptions, QueryKey } from '@tanstack/react-query'
import { useEffect, useState } from "react";
import { z, ZodType } from "zod";
import Bugsnag from "@bugsnag/js";

export const axiosDefaults = Axios.defaults

function getErrorMessageComponent(error: any): React.FC<{ className?: string }> {
  return ({ className = 'f14 mt-3 red text-center' }) => {
    if (!isAxiosError(error))
      return null

    return (
      <span className={className}>{error.response?.data?.message || 'Erro interno do servidor.'}</span>
    )
  }
}

const get = (url: string, params = {}) => {
  const baseUrl = Axios.defaults.baseURL + 'api/v1/'
  return async () => Axios.get(url, { params: params, baseURL: baseUrl }).then(res => res.data)
}

const hour = 60 * 60 * 1000
function useGet<T = any>(url: string, params = {}, additional_params?: UseQueryOptions<T, unknown, T, QueryKey>) {
  let queryKey = [url]
  queryKey.push(JSON.stringify(params))
  return {
    ...useQuery<T>(queryKey, get(url, params), {
      cacheTime: 7 * 24 * hour,
      staleTime: 7 * 24 * hour,
      refetchInterval: 24 * hour,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      useErrorBoundary: (e: any) => e.response?.status >= 500,
      ...additional_params ?? {}
    }),
    queryKey
  };
}

function getSchema<T extends ZodType>(url: string, params = {}, schema?: T, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async () => Axios.get(url, { params: params, baseURL })
    .then(res => res.data).then(data => schema?.parse(data) ?? data)
}

export function useGetSchema<T extends ZodType>(
  url: string, schema?: T, params = {},
  additional_params?: UseQueryOptions<z.infer<T>, unknown, z.infer<T>, QueryKey>,
  version = 1
) {
  let queryKey = [url]
  queryKey.push(JSON.stringify(params))
  return {
    ...useQuery<z.infer<T>>(queryKey, getSchema(url, params, schema, version), {
      cacheTime: 7 * 24 * hour,
      staleTime: 7 * 24 * hour,
      refetchInterval: 24 * hour,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      useErrorBoundary: (e: any) => e.response?.status >= 500 || (e instanceof z.ZodError),
      ...additional_params ?? {}
    }),
    queryKey
  };
}

export function useGetSchemaV2<T extends ZodType>({
  url, schema, params, additional_params, version = 1
}: {
  url: string, schema?: T, params?: Object,
  additional_params?: UseQueryOptions<z.infer<T>, unknown, z.infer<T>, QueryKey>,
  version?: number
}) {
  let queryKey = [url]
  queryKey.push(JSON.stringify(params))
  return {
    ...useQuery<z.infer<T>>(queryKey, getSchema(url, params, schema, version), {
      cacheTime: 7 * 24 * hour,
      staleTime: 7 * 24 * hour,
      refetchInterval: 24 * hour,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      useErrorBoundary: (e: any) => e.response?.status >= 500 || (e instanceof z.ZodError),
      ...additional_params ?? {}
    }),
    queryKey
  };
}

function post<T>(url: string, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: T) => Axios.post(url, { params: params, ...params }, { baseURL })
    .then(res => res.data).catch(error => {
      error.response?.status >= 500 && Bugsnag.notify(error, e => {
        e.addMetadata('request', { params, error });
      })
      throw error;
    });
}

function postFull<T>(url: string, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: T) => Axios.post(url, { params: params, ...params }, { baseURL })
    .catch(error => {
      error.response?.status >= 500 && Bugsnag.notify(error, e => {
        e.addMetadata('request', { params, error })
      })
      throw error;
    });
}

function usePost<T = any>(url: string, additional_params = {}, headers = false) {
  return useMutation([url], (headers ? postFull<T>(url) : post<T>(url)), {
    retry: false,
    ...additional_params
  });
}

export function usePostV2<T = any>({
  url, additional_params = {}, headers = false, version = 1
}: {
  url: string, additional_params?: Object, headers?: boolean, version?: number
}) {
  let queryKey = [url]
  const mutation = useMutation([url], (headers ? postFull<T>(url, version) : post<T>(url, version)), {
    retry: false,
    ...additional_params
  })
  const ErrorMessageComponent = getErrorMessageComponent(mutation.error)
  return {
    ...mutation,
    queryKey,
    ErrorMessageComponent
  };
}

// PATCH
function patch<T>(url: string, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: T) => Axios.patch(url, { params: params, ...params }, { baseURL })
    .then(res => res.data).catch(error => {
      error.response?.status >= 500 && Bugsnag.notify(error, e => {
        e.addMetadata('request', { params, error });
      })
      throw error;
    });
}

function patchFull<T>(url: string, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: T) => Axios.patch(url, { params: params, ...params }, { baseURL })
    .catch(error => {
      error.response?.status >= 500 && Bugsnag.notify(error, e => {
        e.addMetadata('request', { params, error })
      })
      throw error;
    });
}

function usePatch<T = any>(url: string, additional_params = {}, headers = false) {
  return useMutation([url], (headers ? patchFull<T>(url) : patch<T>(url)), {
    retry: false,
    ...additional_params
  });
}

export function usePatchV2<T = any>({
  url, additional_params = {}, headers = false, version = 1
}: {
  url: string, additional_params?: Object, headers?: boolean, version?: number
}) {
  let queryKey = [url]
  const mutation = useMutation([url], (headers ? patchFull<T>(url, version) : patch<T>(url, version)), {
    retry: false,
    ...additional_params
  })
  const ErrorMessageComponent = getErrorMessageComponent(mutation.error)
  return {
    ...mutation,
    queryKey,
    ErrorMessageComponent
  };
}

// PUT
function put<T>(url: string, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: T) => Axios.put(url, { params: params, ...params }, { baseURL })
    .then(res => res.data).catch(error => {
      error.response?.status >= 500 && Bugsnag.notify(error, e => {
        e.addMetadata('request', { params, error });
      })
      throw error;
    });
}

function putFull<T>(url: string, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: T) => Axios.put(url, { params: params, ...params }, { baseURL })
    .catch(error => {
      error.response?.status >= 500 && Bugsnag.notify(error, e => {
        e.addMetadata('request', { params, error })
      })
      throw error;
    });
}

export function usePut<T = any>(url: string, additional_params = {}, headers = false) {
  return useMutation([url], (headers ? putFull<T>(url) : put<T>(url)), {
    retry: false,
    ...additional_params
  });
}

export function usePutV2<T = any>({
  url, additional_params = {}, headers = false, version = 1
}: {
  url: string, additional_params?: Object, headers?: boolean, version?: number
}) {
  let queryKey = [url]
  const mutation = useMutation([url], (headers ? putFull<T>(url, version) : put<T>(url, version)), {
    retry: false,
    ...additional_params
  })
  const ErrorMessageComponent = getErrorMessageComponent(mutation.error)
  return {
    ...mutation,
    queryKey,
    ErrorMessageComponent
  };
}

const _delete = (url: string) => {
  return async (params: any) => Axios.delete(url, params).then(res => res.data)
}

const useDelete = (url: string, additional_params = {}) => {
  return useMutation([url], _delete(url), {
    ...additional_params
  });
}

const useClient = () => {
  return useQueryClient();
}

const prefetchQuery = async (url: string, client: any) => {
  await client.prefetchQuery([url, '{}'], get(url), {
    cacheTime: 7 * 24 * 60 * 60 * 1000,
    staleTime: 7 * 24 * 60 * 60 * 1000,
    retry: 1
  });
}

export function useDummyRequest() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return isLoading
}

export { useGet, usePost, useClient, get, prefetchQuery, useDelete, usePatch };
