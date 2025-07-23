<template>
  <van-dialog
    v-model:show="visible"
    title="请输入签到备注"
    show-cancel-button
    @confirm="confirm"
    @cancel="hide"
    width="94%"
  >
    <ProSchemaForm
      class="pro-schema-filter-form"
      :metadata="[]"
      @field-change="$emit('field-change', $event)"
    />
  </van-dialog>
</template>

<script setup lang="ts">
  import { useVisible } from '@pkstar/vue-use'

  const { visible, show, hide, confirm } = useVisible<any, Record<string, any>>({
    showCallback: async (options = {}) => {},
  })

  defineExpose({
    show,
    hide,
    confirm,
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
