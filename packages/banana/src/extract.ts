import type { Field, MetaData, ExtractOptions } from './type'
import { each, isObject, getValue } from './utils'

export function extract<T extends any>(metaData: MetaData, options: ExtractOptions = {}): T {
  const { excludeHiddenFiled = true, includeSelfFiled = false } = options
  let result: any = {}

  let loop: any
  ;(loop = (source: MetaData) => {
    each<Field>(source as any, (field, i) => {
      let { get, value, defaultValue, key, hidden, children } = field

      // 子项提取
      if (children) {
        Object.assign(result, loop(children))
      }

      // 没有 value 直接返回
      if (typeof value === 'undefined') {
        return
      }

      // 是否排除 hidden 的项
      if (excludeHiddenFiled) {
        if (typeof hidden === 'function') {
          hidden = hidden(value, field, metaData)
        }
        // 有 hidden 赋值默认值，并判空
        if (hidden) {
          value = defaultValue
          if (typeof value === 'undefined') {
            return
          }
        }
      }

      // 优先是有字段定义的key，再取索引or对象key
      const k = key ?? i
      if (typeof get === 'function') {
        // 是否需要自身返回
        if (includeSelfFiled) {
          Object.assign(result, { [k]: getValue(value) })
        }
        // 执行get提取
        const v = get(value, field, metaData)
        if (typeof v === 'undefined') {
          return
        }
        if (isObject(v)) {
          Object.assign(result, getValue(v))
        } else {
          result[k] = getValue(v)
        }
      } else {
        result[k] = getValue(value)
      }
    })
  })(metaData)
  return result
}
