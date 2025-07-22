<template>
  <Component
    v-for="(item, index) in metadata"
    v-bind="omit(item, ['children', 'is', 'fn', 'to'])"
    v-model="item.value"
    :disabled="!!item.disabled"
    :is="item.is"
    :key="index"
    @click.stop="handleTransfer(item)"
  >
    <ProSchemaRenderComponent v-if="item.children?.length" :metadata="item.children">
      <template v-for="key in Object.keys($slots)" :key="key" #[key]="data: any">
        <slot :name="key" v-bind="data" />
      </template>
    </ProSchemaRenderComponent>
    <template v-for="(slot, key) in item.slots" #[slot] :key="slot">
      <slot :name="key" :item="item" />
    </template>
  </Component>
</template>

<script lang="ts">
  import { HorCell, HorCellGroup } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { omit } from '@pkstar/utils'
  import type { ProSchemaRenderField } from './types'
  import CellBlock from '../CellBlock.vue'
  import ProUploader from '../ProUploader/ProUploader.vue'

  import '@daysnap/horn-ui/src/hor-cell/style'
  import '@daysnap/horn-ui/src/hor-cell-group/style'

  type FormatRenderMetadataFiled = Omit<ProSchemaRenderField, 'children'> & {
    children: FormatRenderMetadataFiled[]
  }

  export default defineComponent({
    name: 'ProSchemaRenderComponent',
    props: {
      metadata: {
        type: Array as PropType<FormatRenderMetadataFiled[]>,
        default: () => [],
      },
    },
    setup() {
      const handleTransfer = useTransfer()

      return {
        omit,
        handleTransfer,
      }
    },
    components: {
      CellBlock,
      HorCell,
      HorCellGroup,
      ProUploader,
    },
  })
</script>
