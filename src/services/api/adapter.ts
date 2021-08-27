import fetcher from './axiosService'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

const fetcherInstance = fetcher()

const FetcherClient = async (
  url: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const token = null

  if (token)
    fetcherInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

  return new Promise((resolve, reject) =>
    fetcherInstance(url, options)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  )
}

export { fetcher, FetcherClient }
