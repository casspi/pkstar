<template>
  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <dl class="c-result">
    <dt>请求返回结果：</dt>
    <dd>{{ result }}</dd>
  </dl>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { showLoadingToast } from 'vant'
  import { getSystemInfo } from './index'

  const result = ref()
  const handleTest = async () => {
    const toast = showLoadingToast({ duration: 0 })
    result.value = await getSystemInfo()
    toast.close()
  }
</script>
