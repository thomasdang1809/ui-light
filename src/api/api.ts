import axiosClient from './axios'

export const fetchApi = async <T>(endPoint: string, params?: object): Promise<T> => {
  const response = await axiosClient.get(endPoint, { params })
  return response.data as T
}

export const addApi = async <T>(endPoint: string, data: T): Promise<T> => {
  const response = await axiosClient.post(endPoint, data)
  return response.data as T
}

export const updateApi = async <T>(endPoint: string, data: Partial<T>): Promise<T> => {
  const response = await axiosClient.put(endPoint, data)
  return response.data as T
}

export const deleteApi = async (endPoint: string): Promise<void> => {
  await axiosClient.delete(endPoint)
}
