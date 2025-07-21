import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface RemoveStorageOptions {
  key: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 从本地缓存中移除指定 key。
 */
export const removeStorage = <T extends RemoveStorageOptions = RemoveStorageOptions>(options: T) =>
  call<PickOptions<T>, RemoveStorageOptions>({
    ...options,
    service: 'storage',
    action: 'removeStorage',
  })
