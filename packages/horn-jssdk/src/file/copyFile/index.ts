import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface CopyFileOptions {
  from: string
  to: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 文件复制，可以从临时目录(temps)复制到其他目录。
 */
export const copyFile = <T extends CopyFileOptions = CopyFileOptions>(options: T) =>
  call<PickOptions<T>, CopyFileOptions>({
    ...options,
    service: 'file',
    action: 'copyFile',
  })
