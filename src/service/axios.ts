import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import NProgress from 'nprogress'

// 设置请求头和请求路径
const server = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    timeout: 10 * 1000,
    baseUrl: '/api',
  },
})

// 请求拦截
server.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    NProgress.start()
    return config
  },
  error => {
    throw new Error(error)
  }
)

// 响应拦截
server.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done()
  },
  error => {
    NProgress.done()
    throw new Error(error)
  }
)
