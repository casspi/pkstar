import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface UploadFileOptions<T = any> {
  url: string
  filePath: string
  name: string
  header?: { [props: string]: any }
  timeout?: number
  success?: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

export const uploadFile = <P = any, T extends UploadFileOptions<P> = UploadFileOptions<P>>(
  options: T,
) =>
  call<PickOptions<T>, UploadFileOptions<P>>({
    timeout: 60 * 1000,
    ...options,
    service: 'network',
    action: 'uploadFile',
  })
