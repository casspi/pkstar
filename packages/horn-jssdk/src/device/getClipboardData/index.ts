import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetClipboardDataResult {
  data: string
}

export interface GetClipboardDataOptions {
  success?: (result: GetClipboardDataResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取系统剪贴板的内容。
 */
export const getClipboardData = <T extends GetClipboardDataOptions = GetClipboardDataOptions>(
  options?: T,
) =>
  call<PickOptions<T>, GetClipboardDataOptions>(
    Object.assign({}, options, {
      service: 'device',
      action: 'getClipboardData',
    }),
  )
