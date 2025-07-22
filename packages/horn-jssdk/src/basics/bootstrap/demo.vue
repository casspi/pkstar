<template>
  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { showConfirmDialog } from 'vant'
  import { bootstrap } from './index'

  const handleTest = () => {
    bootstrap(() => {
      showConfirmDialog({
        title: '温馨提示',
        message: `APP启动`,
        showCancelButton: false,
        confirmButtonText: '我知道了',
      })
    })
  }
</script>
