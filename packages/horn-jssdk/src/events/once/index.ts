import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface OnceOptions<T = any> {
  name: string
  key: string
  success: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 消息事件监听，只会触发一次。
 */
export const once = <P = any, T extends OnceOptions<P> = OnceOptions<P>>(options: T) => {
  const { success } = options
  return call<PickOptions<T>, OnceOptions<P>>({
    ...options,
    success: (res) => success(res ? JSON.parse(res as unknown as string) : res),
    service: 'events',
    action: 'once',
  })
}
