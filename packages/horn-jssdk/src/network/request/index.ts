import { type FailCallbackResult, call, type PickOptions } from '../../core'

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

export interface RequestOptions<T = any> {
  url: string
  data?: any
  header?: { [props: string]: any }
  timeout?: number
  method?: Method
  success?: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

export const request = <P = any, T extends RequestOptions<P> = RequestOptions<P>>(options: T) =>
  call<PickOptions<T>, RequestOptions<P>>({
    timeout: 60 * 1000,
    ...options,
    service: 'network',
    action: 'request',
  })
