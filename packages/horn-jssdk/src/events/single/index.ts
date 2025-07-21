import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SingleOptions<T = any> {
  name: string
  key: string
  success: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 消息事件监听，只监听这一个。
 */
export const single = <P = any, T extends SingleOptions<P> = SingleOptions<P>>(options: T) => {
  const { success } = options
  return call<PickOptions<T>, SingleOptions<P>>({
    ...options,
    success: (res) => success(res ? JSON.parse(res as unknown as string) : res),
    service: 'events',
    action: 'single',
  })
}
