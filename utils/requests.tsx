import Axios, { isAxiosError } from "axios";
import { useQuery, useMutation, useQueryClient, UseQueryOptions, QueryKey } from '@tanstack/react-query'
import { useEffect, useState } from "react";
import { z, ZodType } from "zod";
import Bugsnag from "@bugsnag/js";
import { useLink } from "./hooks";

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

const hour = 60 * 60 * 1000

function getSchema<T extends ZodType>(url: string, params = {}, schema?: T, version = 1) {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async () => Axios.get(url, { params: params, baseURL })
    .then(res => res.data).then(data => schema?.parse(data) ?? data)
}

export function useGet<T extends ZodType>({
  url, schema, params, additional_params, version = 1
}: {
  url: string | string[], schema?: T, params?: Object,
  additional_params?: UseQueryOptions<z.infer<T>, unknown, z.infer<T>, QueryKey>,
  version?: number
}) {
  if (!(typeof url === 'string')) {
    url = useLink(url)
  }
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

export function usePost<T = any>({
  url, additional_params = {}, headers = false, version = 1
}: {
  url: string | string[], additional_params?: Object, headers?: boolean, version?: number
}) {
  if (!(typeof url === 'string')) {
    url = useLink(url)
  }
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

export function usePatch<T = any>({
  url, additional_params = {}, headers = false, version = 1
}: {
  url: string | string[], additional_params?: Object, headers?: boolean, version?: number
}) {
  if (!(typeof url === 'string')) {
    url = useLink(url)
  }
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

export function usePut<T = any>({
  url, additional_params = {}, headers = false, version = 1
}: {
  url: string | string[], additional_params?: Object, headers?: boolean, version?: number
}) {
  if (!(typeof url === 'string')) {
    url = useLink(url)
  }
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

const _delete = (url: string, version = 1) => {
  const baseURL = Axios.defaults.baseURL + (version === 1 ? 'api/v1/' : 'api/v2/')
  return async (params: any) => Axios.delete(url, { ...params, baseURL }).then(res => res.data)
}

export const useDelete = (url: string, additional_params = {}) => {
  return useMutation([url], _delete(url), {
    ...additional_params
  });
}

export const useClient = () => {
  return useQueryClient();
}

export const usePrefetchQuery = <T extends ZodType>(url: string, schema?: T) => {
  const { refetch } = useGet({ url, schema, additional_params: { enabled: false } })
  return refetch
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
