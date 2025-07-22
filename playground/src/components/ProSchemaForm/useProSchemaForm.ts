import type { ProSchemaFormMetadata } from '@/components'
import { isFunction } from '@pkstar/utils'

export function useProSchemaForm(fields: ProSchemaFormMetadata | (() => ProSchemaFormMetadata)) {
  return reactive(isFunction(fields) ? fields() : fields)
}
