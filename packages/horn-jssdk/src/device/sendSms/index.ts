import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SendSmsOptions {
  phoneNumber: string
  content: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 拉起手机发送短信界面。
 */
export const sendSms = <T extends SendSmsOptions = SendSmsOptions>(options: T) =>
  call<PickOptions<T>, SendSmsOptions>({
    ...options,
    service: 'device',
    action: 'sendSms',
  })
