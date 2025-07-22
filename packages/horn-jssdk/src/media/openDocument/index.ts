import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface OpenDocumentOptions {
  filePath: string
  fileType: 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'pdf'
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 调用手机第三方应用打开文档。
 */
export const openDocument = <T extends OpenDocumentOptions = OpenDocumentOptions>(options: T) =>
  call<PickOptions<T>, OpenDocumentOptions>({
    ...options,
    service: 'media',
    action: 'openDocument',
  })
