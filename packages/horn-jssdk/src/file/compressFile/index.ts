import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface CompressFileResult {
  filePath: string
}

export interface CompressFileOptions {
  filePaths: string[]
  success?: (result: CompressFileResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 压缩文件，生成一个临时压缩文件zip包。支持多文件压缩。
 */
export const compressFile = <T extends CompressFileOptions = CompressFileOptions>(options: T) =>
  call<PickOptions<T>, CompressFileOptions>({
    ...options,
    service: 'file',
    action: 'compressFile',
  })
