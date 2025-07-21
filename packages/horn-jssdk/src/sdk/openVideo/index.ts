import { callSync } from '../../core'

export interface OpenVideoOptions {
  index: number
  videoInfoList: any[]
}

export const openVideo = (options: OpenVideoOptions) => {
  callSync<void>({
    ...options,
    service: 'txySDK',
    action: 'openVideo',
  })
}
