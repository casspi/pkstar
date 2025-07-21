import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SaveImageToPhotosAlbumOptions {
  filePath: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 保存图片到系统相册
 */
export const saveImageToPhotosAlbum = <
  T extends SaveImageToPhotosAlbumOptions = SaveImageToPhotosAlbumOptions,
>(
  options: T,
) =>
  call<PickOptions<T>, SaveImageToPhotosAlbumOptions>({
    ...options,
    service: 'media',
    action: 'saveImageToPhotosAlbum',
  })
