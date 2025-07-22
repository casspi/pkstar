import { callSync } from '../../core'

export interface OpenScreenAnimationOptions {
  iconUrl?: string
  title?: string
}

/**
 * 打开开屏动画
 */
export const openScreenAnimation = (options?: OpenScreenAnimationOptions) =>
  callSync<void>({
    ...options,
    service: 'basics',
    action: 'openScreenAnimation',
  })
