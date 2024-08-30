/**
 * 判断是否是async await 函数
 */
export function isAsyncFunction(val: unknown): boolean {
  return Object.prototype.toString.call(val) === '[object AsyncFunction]'
}
