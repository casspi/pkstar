import { callSync } from '../../core'

export interface OpenBrowserOptions {
  url: string
}

/**
 * 跳转到系统浏览器
 */
export const openBrowser = (options: OpenBrowserOptions) =>
  callSync<void>({
    ...options,
    service: 'basics',
    action: 'openBrowser',
  })
