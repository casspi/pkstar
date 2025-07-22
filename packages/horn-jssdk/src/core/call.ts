import { log, nf } from '../utils'
import { Code } from './code'
import { config } from '../config'

export interface FailCallbackResult {
  code?: number
  message?: string
}

export declare const HornApi: {
  call<T = any>(
    success: (res: { code: number; message?: string; data: T }) => void,
    fail: (err: { code?: number; message?: string }) => void,
    service: string,
    action: string,
    params: any,
  ): void
}

export type PromisifySuccessResult<
  P,
  T extends { success?: (...args: any[]) => void },
> = P extends { success: any }
  ? void
  : P extends { fail: any }
  ? void
  : Promise<Parameters<Exclude<T['success'], undefined>>[0]>

export type Options<T> = {
  success?(data: T): void
  fail?(err: FailCallbackResult): void
  service: string
  action: string
  [props: string]: any
}

export type PickOptions<T> = T & Pick<Options<any>, 'service' | 'action'>

/**
 * jssdk 核心 无需直接调用
 */
export const core = <T>(options: Options<T>): void => {
  const { success = nf, fail = nf, service, action, ...params } = options
  const fn = config.mock ?? HornApi.call
  log(service, action, '请求参数 => ', params)
  fn(
    (res: any) => {
      log(service, action, '请求返回 => ', res)
      const { code, data } = res
      code === Code.SUCCESS ? success(data) : fail(res)
    },
    (err: any) => {
      log(service, action, '请求错误 => ', err)
      fail(err)
    },
    service,
    action,
    params,
  )
}

/**
 * 包装函数
 */
export const call = <T extends Options<any>, P extends Partial<Options<any>>>(
  options: T,
): PromisifySuccessResult<T, P> => {
  const { success, fail } = options

  if (success || fail) {
    return core(options) as any
  }

  return new Promise((success, fail) => core(Object.assign({}, options, { success, fail }))) as any
}
