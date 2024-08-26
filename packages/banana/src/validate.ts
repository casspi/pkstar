import { extract } from './extract'
import { ExtractOptions, Field, MetaData } from './type'
import { each, isEmpty } from './utils'

export function validate<T = any>(metaData: MetaData, options: ExtractOptions = {}): T {
  let loop: any
  ;(loop = (source: MetaData) => {
    each<Field>(source as any, (field) => {
      let { value, rules, hidden, children, label } = field
      if (children) {
        loop(children)
      }

      if (typeof hidden === 'function') {
        hidden = hidden(value, field, metaData)
      }

      if (hidden || !rules || !rules.length) return

      for (let i = 0, len = rules.length; i < len; i++) {
        const rule = rules[i]
        if (typeof rule === 'function') {
          rule(value, field, source)
        } else {
          const { required, validator, message = `${label}不能为空` } = rule
          console.log(required, value)
          // 判空
          if (required && isEmpty(value)) {
            throw message
          }
          // 函数
          if (typeof validator === 'function' && validator(value, field, source) === false) {
            throw message
          }
          // 正则
          if (validator instanceof RegExp && !validator.test(value)) {
            throw message
          }
        }
      }
    })
  })(metaData)
  return extract(metaData, options)
}
