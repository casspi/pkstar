import { type Field } from '@pkstar/banana'
import type { Loose } from '@daysnap/types'

export interface ProSchemaFormField extends Field {
  is?: any
  value?: any
  disabled?: boolean
  defaultValue?: any
  fn?: (item: ProSchemaFormField) => any
  hidden?: any
  props?: Loose<{
    label?: string
    direction?: 'column' | 'row'
    formatter?: (value: any) => any
  }>
  slots?: Record<string, string>
}

export type ProSchemaFormMetadata = Record<string, ProSchemaFormField>
