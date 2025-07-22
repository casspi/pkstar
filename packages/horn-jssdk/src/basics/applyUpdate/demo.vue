<template>
  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { showConfirmDialog } from 'vant'
  import { applyUpdate } from './index'

  const handleTest = async () => {
    await showConfirmDialog({
      title: '温馨提示',
      message: `确认更新前端资源？`,
    })
    applyUpdate()
  }
</script>
