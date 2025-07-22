<template>
  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试获取授权设置</van-button>
  </div>

  <dl class="c-result c-photo-group">
    <dt>请求返回结果：</dt>
    <dd v-for="(item, index) in result?.tempFilePaths" :key="index">
      <img :src="item" />
    </dd>
    <dt>{{ result }}</dt>
  </dl>

  <div style="margin: 32px">
    <van-button @click="handleOpen" round block type="primary">跳转到授权设置页面</van-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { showLoadingToast } from 'vant'
  import { openAppAuthorizeSetting, getAppAuthorizeSetting } from '..'

  const handleOpen = () => {
    openAppAuthorizeSetting()
  }

  const result = ref()
  const handleTest = async () => {
    const toast = showLoadingToast({ duration: 0 })
    result.value = await getAppAuthorizeSetting()
    toast.close()
  }
</script>
