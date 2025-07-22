import { callSync } from '../../core'

export interface OpenLivePlayerOptions {
  rtmpUrl: string
}

/**
 * 打开直播室
 */
export const openLivePlayer = (options: OpenLivePlayerOptions) =>
  callSync<void>({
    ...options,
    service: 'txySDK',
    action: 'openLivePlayer',
  })
