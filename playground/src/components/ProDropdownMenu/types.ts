import { type DropdownItemOption } from 'vant'
import type { Field } from '@pkstar/banana'
import type { ExtractPropTypes, PropType } from 'vue'

export interface ProDropdownMenuField extends Field {
  options?: DropdownItemOption[]
}

export type ProDropdownMenuMetadata = Record<string, ProDropdownMenuField>

export const proDropdownMenuProps = {
  metadata: {
    type: Object as PropType<ProDropdownMenuMetadata>,
    default: () => ({}),
  },
}

export type ProDropdownMenuProps = ExtractPropTypes<typeof proDropdownMenuProps>
