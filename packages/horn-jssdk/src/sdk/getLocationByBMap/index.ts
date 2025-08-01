import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetLocationByBMapResult {
  latitude: number
  longitude: number
  address: string
  country: string
  countryCode: string
  province: string
  city: string
  district: string
  street: string
  streetNumber: string
  cityCode: string
  adCode: string
  poi?: string
}

export interface GetLocationByBMapOptions {
  success?: (result: GetLocationByBMapResult) => void
  fail?: (err: FailCallbackResult) => void
}

// 获取百度地图定位
export const getLocationByBMap = <T extends GetLocationByBMapOptions = GetLocationByBMapOptions>(
  options?: T,
) =>
  call<PickOptions<T>, GetLocationByBMapOptions>(
    Object.assign({}, options, {
      service: 'bmapSDK',
      action: 'getLocationByBMap',
    }),
  )
