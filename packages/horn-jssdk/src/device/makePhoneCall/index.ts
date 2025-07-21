import { callSync } from '../../core'

export interface MakePhoneCallOptions {
  phoneNumber: string
}

/**
 * 拨打电话 。
 */
export const makePhoneCall = (options: MakePhoneCallOptions) =>
  callSync<void>({
    ...options,
    service: 'device',
    action: 'makePhoneCall',
  })
