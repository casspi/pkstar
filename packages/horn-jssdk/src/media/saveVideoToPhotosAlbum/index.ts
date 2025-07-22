import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SaveVideoToPhotosAlbumOptions {
  filePath: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 保存视频到系统相册
 */
export const saveVideoToPhotosAlbum = <
  T extends SaveVideoToPhotosAlbumOptions = SaveVideoToPhotosAlbumOptions,
>(
  options: T,
) =>
  call<PickOptions<T>, SaveVideoToPhotosAlbumOptions>({
    ...options,
    service: 'media',
    action: 'saveVideoToPhotosAlbum',
  })
