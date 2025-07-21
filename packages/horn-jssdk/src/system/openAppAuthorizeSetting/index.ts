import { callSync } from '../../core'

/**
 * 跳转系统应用授权管理页
 */
export const openAppAuthorizeSetting = () =>
  callSync<void>({
    service: 'system',
    action: 'openAppAuthorizeSetting',
  })
