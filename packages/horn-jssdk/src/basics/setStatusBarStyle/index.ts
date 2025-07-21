import { callSync } from '../../core'

export interface SetStatusBarStyleOptions {
  theme: 'dark' | 'light'
}

/**
 * 设置状态栏样式
 */
export const setStatusBarStyle = (options: SetStatusBarStyleOptions) =>
  callSync<void>({
    ...options,
    service: 'basics',
    action: 'setStatusBarStyle',
  })
