import { callSync } from '../../core'

export interface OpenLiveRoomOptions {
  id: number
  vehicleQuantity: number
  title: string
  subTitle: string
  pushUrl: string
  pullUrl: string
  roomId: string
  userId: string
  userName: string
  accelerateUrl: string
  city: string
  startTime: string
  name: string
  anchorPermisson: string // 大小主播权限
  status: number
  org: {
    id: string
    name: string
  }
}

/**
 * 打开直播室
 */
export const openLiveRoom = (options: OpenLiveRoomOptions) =>
  callSync<void>({
    ...options,
    service: 'txySDK',
    action: 'openLiveRoom',
  })
