import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface VoiceInputResult {
  content: string
}

export interface VoiceInputOptions {
  success?: (result: VoiceInputResult) => void
  fail?: (err: FailCallbackResult) => void
}

export const voiceInput = <T extends VoiceInputOptions = VoiceInputOptions>(options?: T) =>
  call<PickOptions<T>, VoiceInputOptions>(
    Object.assign({}, options, {
      service: 'xfSDK',
      action: 'voiceInput',
    }),
  )
