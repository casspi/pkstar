import { callSync } from '../../core'

export interface OffOptions {
  name: string
  key?: string
}

/**
 * 事件取消。
 */
export const off = (options: OffOptions) =>
  callSync<void>({
    ...options,
    service: 'events',
    action: 'off',
  })
