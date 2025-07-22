import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SetStorageOptions<T = any> {
  key: string
  data: T
  success?: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。
 */
export const setStorage = <P = any, T extends SetStorageOptions<P> = SetStorageOptions<P>>(
  options: T,
) => {
  const { data } = options
  return call<PickOptions<T>, SetStorageOptions<P>>({
    ...options,
    service: 'storage',
    action: 'setStorage',
    data: JSON.stringify(data),
  })
}
