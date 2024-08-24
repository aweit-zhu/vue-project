// httpService.js
import { useLoadingStore } from '@/stores/loadingStore'
import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

const { startLoading, stopLoading } = useLoadingStore()

// 创建一个 axios 实例
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, // 你的 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前可以添加一些操作，例如添加 token
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    startLoading()
    return config
  },
  (error: any) => {
    stopLoading()
    return Promise.reject(error)
  }
)

// 响应拦截器
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    stopLoading()
    return response
  },
  (error: any) => {
    // 处理响应错误
    stopLoading()
    return Promise.reject(error)
  }
)

// 导出不同的 API 请求方法，带有类型声明
export const get = <T>(url: string, params?: any): Promise<AxiosResponse<T>> => {
  return apiClient.get<T>(url, { params })
}

export const post = <T>(url: string, data?: any): Promise<AxiosResponse<T>> => {
  return apiClient.post<T>(url, data)
}

export const put = <T>(url: string, data?: any): Promise<AxiosResponse<T>> => {
  return apiClient.put<T>(url, data)
}

export const del = <T>(url: string): Promise<AxiosResponse<T>> => {
  return apiClient.delete<T>(url)
}

// 也可以导出整个实例，以便在需要时进行更灵活的操作
export default apiClient
