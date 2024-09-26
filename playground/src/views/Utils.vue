<template>
  <div>
    <button type="button" @click="copy">复制</button>
    <button type="button" @click="parse">粘贴</button>
  </div>
</template>

<script setup lang="ts">
  import { setClipboardData, getClipboardData } from '@pkstar/utils'

  const copy = () => {
    setClipboardData('复制成功')
  }
  const parse = async () => {
    const res = await getClipboardData()
    console.log('res=>', res)
  }
</script>

<style lang="scss" scoped></style>
