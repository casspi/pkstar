import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface ScanCodeResult {
  result: string
}

export interface ScanCodeOptions {
  onlyFromCamera?: boolean
  flashlight?: boolean
  success?: (result: ScanCodeResult) => void
  fail?: (err: FailCallbackResult) => void
}

export const scanCode = <T extends ScanCodeOptions = ScanCodeOptions>(options?: T) =>
  call<PickOptions<T>, ScanCodeOptions>(
    Object.assign(
      {
        onlyFromCamera: false,
        flashlight: true,
      },
      options,
      {
        service: 'device',
        action: 'scanCode',
      },
    ),
  )
