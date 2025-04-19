// hooks/useFetch.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchApi, addApi, updateApi, deleteApi } from '../api/api'

export const useFetch = <T>(key: string, endPoint: string, params?: object) => {
  return useQuery<T>({
    queryKey: [key, params],
    queryFn: () => fetchApi<T>(endPoint, params),
  })
}

export const useAdd = <T>(endPoint: string, invalidateKey: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: T) => addApi<T>(endPoint, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] })
    },
  })
}

export const useUpdate = <T>(endPoint: string, invalidateKey: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Partial<T>) => updateApi<T>(endPoint, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] })
    },
  })
}

export const useDelete = (endPoint: string, invalidateKey: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => deleteApi(endPoint),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] })
    },
  })
}