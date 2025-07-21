import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface FileToBase64Result {
  base64: string
}

export interface FileToBase64Options {
  filePath: string
  success?: (result: FileToBase64Result) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 文件转base64。
 */
export const fileToBase64 = <T extends FileToBase64Options = FileToBase64Options>(options: T) =>
  call<PickOptions<T>, FileToBase64Options>({
    ...options,
    service: 'file',
    action: 'fileToBase64',
  })
