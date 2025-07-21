import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface Base64ToFileResult {
  filePath: string
}

export interface Base64ToFileOptions {
  base64: string
  success?: (result: Base64ToFileResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * base64转文件。
 */
export const base64ToFile = <T extends Base64ToFileOptions = Base64ToFileOptions>(options: T) =>
  call<PickOptions<T>, Base64ToFileOptions>({
    ...options,
    service: 'file',
    action: 'base64ToFile',
  })
