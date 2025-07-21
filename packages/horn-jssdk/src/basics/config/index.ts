import { type FailCallbackResult, call, type PickOptions } from '../../core'

export interface SetConfigOptions {
  branch: string
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 提供给 h5 设置应用配置
 */
export const setConfig = <T extends SetConfigOptions = SetConfigOptions>(options: T) =>
  call<PickOptions<T>, SetConfigOptions>({
    ...options,
    service: 'basics',
    action: 'setConfig',
  })

export interface GetConfigResult {
  branch: string
}

export interface GetConfigOptions {
  success?: (result: GetConfigResult) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 获取 h5 设置应用配置
 */
export const getConfig = <T extends GetConfigOptions = GetConfigOptions>(options?: T) =>
  call<PickOptions<T>, GetConfigOptions>(
    Object.assign({}, options, {
      service: 'basics',
      action: 'getConfig',
    }),
  )
