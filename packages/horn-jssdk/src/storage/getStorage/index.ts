import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetStorageResult<T = any> {
  data: T
}

export interface GetStorageOptions<T = any> {
  key: string
  success?: (result: GetStorageResult<T>) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 从本地缓存中异步获取指定 key 的内容。
 */
export const getStorage = <P = any, T extends GetStorageOptions<P> = GetStorageOptions<P>>(
  options: T,
) =>
  call<PickOptions<T>, GetStorageOptions<P>>({
    ...options,
    service: 'storage',
    action: 'getStorage',
  }).then((res) => {
    const { data } = res
    if (data) {
      res.data = JSON.parse(data as unknown as string)
    }
    return res
  })
