import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface RemoveFileOptions {
  filePath: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 删除本地文件
 */
export const removeFile = <T extends RemoveFileOptions = RemoveFileOptions>(options: T) =>
  call<PickOptions<T>, RemoveFileOptions>({
    ...options,
    service: 'file',
    action: 'removeFile',
  })
