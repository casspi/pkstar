import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetAppAuthorizeSettingResult {
  albumAuthorized: string
  cameraAuthorized: string
  locationAuthorized: string
  microphoneAuthorized: string
  notificationAuthorized: string
  phoneCalendarAuthorized: string
}

export interface GetAppAuthorizeSettingOptions {
  success?: (result: GetAppAuthorizeSettingResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取 APP 授权设置信息
 */
export const getAppAuthorizeSetting = <
  T extends GetAppAuthorizeSettingOptions = GetAppAuthorizeSettingOptions,
>(
  options?: T,
) =>
  call<PickOptions<T>, GetAppAuthorizeSettingOptions>(
    Object.assign({}, options, {
      service: 'system',
      action: 'getAppAuthorizeSetting',
    }),
  )
