<template>
  <HorView class="attend-view">
    <p class="title">{{ now }}</p>
  </HorView>
</template>

<script setup lang="ts">
  import { formatDate } from '@pkstar/utils'

  const now = formatDate(new Date(), 'yyyy年MM月dd日 hh:mm:ss')
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .title {
    line-height: j(40);
    color: $color-primary;
    text-align: center;
  }
</style>
