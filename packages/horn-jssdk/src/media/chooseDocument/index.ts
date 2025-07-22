import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ChooseDocumentResult {
  tempFilePaths: string[]
  tempFiles: {
    path: string
    size: number
  }[]
}

export interface ChooseDocumentOptions {
  count?: number
  fileTypes: ('doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'pdf')[]
  success?: (result: ChooseDocumentResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 选择文档
 */
export const chooseDocument = <T extends ChooseDocumentOptions = ChooseDocumentOptions>(
  options?: T,
) =>
  call<PickOptions<T>, ChooseDocumentOptions>(
    Object.assign(
      {
        count: 1,
      },
      options,
      {
        service: 'media',
        action: 'chooseDocument',
      },
    ),
  )
