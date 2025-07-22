import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface AddPhoneContactOptions {
  name: string
  phoneNumber: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
 */
export const addPhoneContact = <T extends AddPhoneContactOptions = AddPhoneContactOptions>(
  options: T,
) =>
  call<PickOptions<T>, AddPhoneContactOptions>({
    ...options,
    service: 'device',
    action: 'addPhoneContact',
  })
