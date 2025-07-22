import { callSync } from '../../core'

/**
 * 关闭、重启APP ，iOS 不支持重启
 */
export const reboot = () =>
  callSync<void>({
    service: 'system',
    action: 'reboot',
  })
