import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ClearStorageOptions {
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 清理本地数据缓存。
 */
export const clearStorage = <T extends ClearStorageOptions = ClearStorageOptions>(options?: T) =>
  call<PickOptions<T>, ClearStorageOptions>(
    Object.assign({}, options, {
      service: 'storage',
      action: 'clearStorage',
    }),
  )
