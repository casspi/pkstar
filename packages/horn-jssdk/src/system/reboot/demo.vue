<template>
  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { showConfirmDialog } from 'vant'
  import { reboot } from './index'

  const handleTest = async () => {
    await showConfirmDialog({ message: `确认退出APP？` })
    reboot()
  }
</script>
