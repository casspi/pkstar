import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ChooseImageResult {
  tempFilePaths: string[]
  tempFiles: {
    path: string
    size: number
    width: number
    height: number
  }[]
}

export interface ChooseImageOptions {
  count?: number
  sizeType?: ('original' | 'compressed')[]
  sourceType?: ('album' | 'camera')[]
  success?: (result: ChooseImageResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 选择图片
 */
export const chooseImage = <T extends ChooseImageOptions = ChooseImageOptions>(options?: T) =>
  call<PickOptions<T>, ChooseImageOptions>(
    Object.assign(
      {
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
      },
      options,
      {
        service: 'media',
        action: 'chooseImage',
      },
    ),
  )
