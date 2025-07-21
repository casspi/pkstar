import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SetClipboardDataResult {
  data: string
}

export interface SetClipboardDataOptions {
  data: string
  success?: (result: SetClipboardDataResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取系统剪贴板的内容。
 */
export const setClipboardData = <T extends SetClipboardDataOptions = SetClipboardDataOptions>(
  options: T,
) =>
  call<PickOptions<T>, SetClipboardDataOptions>({
    ...options,
    service: 'device',
    action: 'setClipboardData',
  })
