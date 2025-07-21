import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ChooseContactResult {
  phoneNumber: string
  displayName: string
  phoneNumberList: string[]
}

export interface ChooseContactOptions {
  success?: (result: ChooseContactResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 拉起手机通讯录，选择联系人。
 */
export const chooseContact = <T extends ChooseContactOptions = ChooseContactOptions>(options?: T) =>
  call<PickOptions<T>, ChooseContactOptions>(
    Object.assign({}, options, {
      service: 'device',
      action: 'chooseContact',
    }),
  )
