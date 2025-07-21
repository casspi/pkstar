import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface LicenseOCRResult {
  content: string[] | string
  filePath: string
}

export type LicenseOCRAction = 'licenseScan' | 'licenseCapture' | 'vinScan'

export interface LicenseOCROptions {
  filePath?: string
  current?: LicenseOCRAction
  actions?: LicenseOCRAction[]
  album?: boolean
  success?: (result: LicenseOCRResult) => void
  fail?: (err: FailCallbackResult) => void
}

// 行驶证识别
export const licenseOCR = <T extends LicenseOCROptions = LicenseOCROptions>(options: T) =>
  call<PickOptions<T>, LicenseOCROptions>({
    current: 'licenseScan',
    actions: ['licenseScan', 'licenseCapture', 'vinScan'],
    album: true,
    ...options,
    service: 'ztSDK',
    action: 'licenseOCR',
  })
