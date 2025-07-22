<template>
  <HorView title="消息列表" :left-arrow="false">
    <ProSkeleton v-if="!data" :loading="loading" :error="error" @refresh="trigger" />

    <div class="c-br"></div>
    <MessageItem :item="item" v-for="(item, index) in data" :key="index" />
  </HorView>
</template>

<script setup lang="ts">
  import { useAsyncTask, usePaging } from '@pkstar/vue-use'
  import MessageItem from './components/MessageItem.vue'
  import { reqMessageList } from '@/api'
  import { sleep } from '@pkstar/utils'
  import { showSuccessToast } from 'vant'
  import { onBeforeMountOrActivated } from '@/hooks'

  const { data, error, loading, trigger } = useAsyncTask(() => reqMessageList({ id }), {
    immediate: true,
  })

  // onBeforeMountOrActivated(async () => {
  //   await trigger()
  // })
</script>
