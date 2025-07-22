import { callSync } from '../../core'

export interface VibrateShortOptions {
  type: 'heavy' | 'medium' | 'light'
}

/**
 * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效 。
 */
export const vibrateShort = (options?: VibrateShortOptions) =>
  callSync<void>({
    type: 'heavy',
    ...options,
    service: 'device',
    action: 'vibrateShort',
  })
