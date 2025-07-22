import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface PreviewVideoOptions {
  current: string
  mute?: boolean
  autoplay?: boolean
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 在新页面中全屏预览视频。
 */
export const previewVideo = <T extends PreviewVideoOptions = PreviewVideoOptions>(options: T) =>
  call<PickOptions<T>, PreviewVideoOptions>({
    mute: false,
    autoplay: false,
    ...options,
    service: 'media',
    action: 'previewVideo',
  })
