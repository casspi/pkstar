import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface GetFileInfoResult {
  filePath: string
  size: number
  width: number
  height: number
  duration: number
}

export interface GetFileInfoOptions {
  filePath: string
  fileType: 'image' | 'video' | 'other'
  success?: (result: GetFileInfoResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取本地文件信息
 */
export const getFileInfo = <T extends GetFileInfoOptions = GetFileInfoOptions>(options: T) =>
  call<PickOptions<T>, GetFileInfoOptions>({
    ...options,
    service: 'file',
    action: 'getFileInfo',
  })
