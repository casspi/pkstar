import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetLocationResult {
  latitude: number
  longitude: number
}

export interface GetLocationOptions {
  success?: (result: GetLocationResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取GPS定位
 */
export const getLocation = <T extends GetLocationOptions = GetLocationOptions>(options?: T) =>
  call<PickOptions<T>, GetLocationOptions>(
    Object.assign({}, options, {
      service: 'location',
      action: 'getLocation',
    }),
  )
