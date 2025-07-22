import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface PreviewImageOptions {
  current?: string
  urls: string[]
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 删除本地文件
 */
export const previewImage = <T extends PreviewImageOptions = PreviewImageOptions>(options: T) =>
  call<PickOptions<T>, PreviewImageOptions>({
    ...options,
    service: 'media',
    action: 'previewImage',
  })
