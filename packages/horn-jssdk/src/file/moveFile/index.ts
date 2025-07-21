import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface MoveFileOptions {
  from: string
  to: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 文件移动，可以从临时目录(temps)移动到其他目录。
 */
export const moveFile = <T extends MoveFileOptions = MoveFileOptions>(options: T) =>
  call<PickOptions<T>, MoveFileOptions>({
    ...options,
    service: 'file',
    action: 'moveFile',
  })
