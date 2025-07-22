import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ClearFileOptions {
  dir: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 根据文件夹来删除文件
 * / 删除全部文件
 * images/ 删除图片下文件
 */
export const clearFile = <T extends ClearFileOptions = ClearFileOptions>(options: T) =>
  call<PickOptions<T>, ClearFileOptions>({
    ...options,
    service: 'file',
    action: 'clearFile',
  })
