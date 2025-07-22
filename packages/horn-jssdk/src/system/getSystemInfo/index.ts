import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetSystemInfoResult {
  brand: string
  model: string
  version: string
  system: string
  platform: 'ios' | 'android'
  imei: string
  mac: string
  deviceId: string
  bundleId: string
  appVersionCode: string
  appVersionName: string
}

export interface GetSystemInfoOptions {
  success?: (result: GetSystemInfoResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取系统信息
 */
export const getSystemInfo = <T extends GetSystemInfoOptions = GetSystemInfoOptions>(options?: T) =>
  call<PickOptions<T>, GetSystemInfoOptions>(
    Object.assign({}, options, {
      service: 'system',
      action: 'getSystemInfo',
    }),
  )
