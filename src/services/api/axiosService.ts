/* eslint-disable */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import _ from 'lodash'

const apiUrl = process.env.BASE_URL || ''

let axiosInstance: AxiosInstance | null = null

type ParamValidFiels = {
  [k: string]: string | number
}

const removeInvalidFields = (data: object): object => {
  const cleared = _(data)
    .pickBy(_.isObject)
    .mapValues(removeInvalidFields)
    .omitBy(_.isEmpty)
    .omitBy(_.isNil)
    .assign(_.omitBy(data, _.isObject))
    .value()

  const result: ParamValidFiels = {}

  Object.keys(cleared).forEach((key) => (result[key] = cleared[key]))

  return result
}

export default (
  createNew?: boolean,
  options?: AxiosRequestConfig
): AxiosInstance => {
  if (axiosInstance && !createNew) return axiosInstance as AxiosInstance

  axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'pt-BR'
    },
    ...options
  })

  axiosInstance.interceptors.request.use(
    function (config) {
      config.params = removeInvalidFields(config.params)

      return config
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function (error) {
      console.log('ERROR ON REQ INTERCEPTOR ', error)
    }
  )

  axiosInstance.interceptors.response.use(
    function (response) {
      // console.log('RESPONSE ON RES INTERCEPTOR ', response)
      
      return response
    },
    function (error) {
      console.log('ERROR ON RES INTERCEPTOR ', error)

      // TODO: Disparar evento pro serviço de logs
      const status = error?.response?.status

      if (status === 401) {
        axiosInstance = null
        // limpar cookies
      }

      return Promise.reject({
        ...error,
        message: error?.response?.data?.message || error
      })
    }
  )

  return axiosInstance
}
