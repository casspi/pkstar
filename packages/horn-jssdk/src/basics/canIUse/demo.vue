<template>
  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { showConfirmDialog } from 'vant'
  import { canIUse } from './index'

  const handleTest = () => {
    const result = canIUse()
    showConfirmDialog({
      title: '温馨提示',
      message: result ? `支持JSSDK` : `不支持JSSDK`,
      showCancelButton: false,
      confirmButtonText: '我知道了',
    })
  }
</script>
