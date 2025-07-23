<template>
  <HorView title="消息列表" :left-arrow="false">
    <ProSkeleton
      v-if="!data?.length"
      :loading="loading"
      :error="error"
      @refresh="trigger"
      empty-description="暂无消息"
    />
    <HorScroll v-else class="home-scroll" :list-disabled="false" finished @refresh="trigger">
      <div class="c-br"></div>
      {{ data }}
      <template v-for="(group, key) in data" :key="key">
        <MessageItem :item="item" v-for="item in group" :key="item.id" />
      </template>
    </HorScroll>
  </HorView>
</template>

<script setup lang="ts">
  import { useAsyncTask, usePaging } from '@pkstar/vue-use'
  import MessageItem from './components/MessageItem.vue'
  import { reqMessageList } from '@/api'
  import { sleep } from '@pkstar/utils'
  import { showSuccessToast } from 'vant'
  import { onBeforeMountOrActivated } from '@/hooks'

  const { data, error, loading, trigger } = useAsyncTask(() => reqMessageList(), {})

  onBeforeMountOrActivated(async () => {
    await trigger()
  })
</script>
