import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface DownloadFileResult {
  filePath: string
}

export interface DownloadFileOptions {
  url: string
  filePath?: string
  header?: { [props: string]: any }
  timeout?: number
  success?: (result: DownloadFileResult) => void
  fail?: (err: FailCallbackResult) => void
}

export const downloadFile = <T extends DownloadFileOptions = DownloadFileOptions>(options: T) =>
  call<PickOptions<T>, DownloadFileOptions>({
    timeout: 60 * 1000,
    ...options,
    service: 'network',
    action: 'downloadFile',
  })
