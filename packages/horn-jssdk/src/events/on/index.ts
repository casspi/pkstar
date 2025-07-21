import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface OnOptions<T = any> {
  name: string
  key: string
  success: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 消息事件监听。
 */
export const on = <P = any, T extends OnOptions<P> = OnOptions<P>>(options: T) => {
  const { success } = options
  return call<PickOptions<T>, OnOptions<P>>({
    ...options,
    success: (res) => success(res ? JSON.parse(res as unknown as string) : res),
    service: 'events',
    action: 'on',
  })
}
