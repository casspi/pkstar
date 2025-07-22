import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface CropImageOptionsResult {
  filePath: string
}

export interface CropImageOptions {
  filePath: string
  widthRatio?: number
  heightRatio?: number
  success?: (result: CropImageOptionsResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 按比例裁剪图片
 */
export const cropImage = <T extends CropImageOptions = CropImageOptions>(options?: T) =>
  call<PickOptions<T>, CropImageOptions>(
    Object.assign(
      {
        widthRatio: 4,
        heightRatio: 3,
      },
      options,
      {
        service: 'media',
        action: 'cropImage',
      },
    ),
  )
