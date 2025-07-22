<template>
  <VanDropdownMenu :overlay="false">
    <VanDropdownItem
      v-for="(item, index) in metadata"
      :key="index"
      :title="item.label"
      :options="item.options"
      @open="handleTransfer(item)"
      @close="handleClose(item)"
    />
  </VanDropdownMenu>
</template>

<script setup lang="ts">
  import { useTransfer } from '@pkstar/vue-use'
  import { proDropdownMenuProps, type ProDropdownMenuField } from './types'

  const props = defineProps(proDropdownMenuProps)
  const overlay = ref(false)

  const handleTransfer = useTransfer()
  const handleClose = (item: ProDropdownMenuField) => {
    //
  }
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
