import { callSync } from '../../core'

/**
 * 关闭开屏动画
 */
export const closeScreenAnimation = () =>
  callSync<void>({
    service: 'basics',
    action: 'closeScreenAnimation',
  })
