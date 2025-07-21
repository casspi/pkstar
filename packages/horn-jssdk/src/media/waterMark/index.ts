import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface WaterMarkOptionsResult {
  filePath: string
}
export interface WaterMarkOptions {
  filePath: string
  text: number | string
  fontSize?: number
  color?: string
  padding?: number
  position?: 'left-top' | 'right-top' | 'right-bottom' | 'left-bottom' | 'center'
  success?: (result: WaterMarkOptionsResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 图片加水印
 */
export const waterMark = <T extends WaterMarkOptions = WaterMarkOptions>(options?: T) =>
  call<PickOptions<T>, WaterMarkOptions>(
    Object.assign(
      {
        fontSize: 20,
        color: '#ff0000',
        padding: 10,
        position: 'right-bottom',
      },
      options,
      {
        service: 'media',
        action: 'waterMark',
      },
    ),
  )
