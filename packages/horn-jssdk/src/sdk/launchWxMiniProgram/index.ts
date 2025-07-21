import { callSync } from '../../core'

export enum MiniprogramType {
  TEST = 0,
  PREVIEW = 1,
  RELEASE = 2,
}
export interface LaunchWxMiniOptions {
  appId: string // 填移动应用(App)的 AppId，非小程序的 AppID
  userName: string // 小程序原始id
  path: string // 小程序路径
  miniprogramType: MiniprogramType // 小程序版本（0-正式版，1-开发版，2-体验版）
}

export const launchWxMiniProgram = (options: LaunchWxMiniOptions) =>
  callSync<void>(
    Object.assign({}, options, {
      service: 'wxSDK',
      action: 'launchWxMini', // 原生固定字段
    }),
  )
