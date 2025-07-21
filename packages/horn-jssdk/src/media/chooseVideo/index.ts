import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ChooseVideoResult {
  tempFilePaths: string[]
  tempFiles: {
    cover: string
    path: string
    size: number
    width: number
    height: number
    duration: number
  }[]
}

export interface ChooseVideoOptions {
  count?: number
  compressed?: boolean
  maxDuration?: number
  sourceType?: ('album' | 'camera')[]
  success?: (result: ChooseVideoResult) => void
  fail?: (err: FailCallbackResult) => void
}

export const chooseVideo = <T extends ChooseVideoOptions = ChooseVideoOptions>(options?: T) =>
  call<PickOptions<T>, ChooseVideoOptions>(
    Object.assign(
      {
        count: 1,
        maxDuration: 15,
        sourceType: ['album'],
      },
      options,
      {
        service: 'media',
        action: 'chooseVideo',
      },
    ),
  )
