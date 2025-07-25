<template>
  <HorView title="消息列表" :left-arrow="false">
    <ProSkeleton
      v-if="!hasMessage"
      :loading="loading"
      :error="error"
      @refresh="trigger"
      empty-description="暂无消息"
    />
    <HorScroll v-else class="home-scroll" :list-disabled="false" finished @refresh="trigger">
      <div class="c-br"></div>
      {{ data }}
      <template v-for="(group, key) in data" :key="key">
        <MessageItem :item="item" v-for="item in group" :key="item.approvalId" />
      </template>
    </HorScroll>
  </HorView>
</template>

<script setup lang="ts">
  import { useAsyncTask } from '@pkstar/vue-use'
  import MessageItem from './components/MessageItem.vue'
  import { reqConfig, reqMessageList } from '@/api'
  import { onBeforeMountOrActivated } from '@/hooks'
  import { useSysConfigStore } from '@/stores'

  const { data, error, loading, trigger } = useAsyncTask(() => reqMessageList(), {})

  // 系统配置数据
  const getSysConfig = async () => {
    const res = await reqConfig()
    const { setSysConfig } = useSysConfigStore()
    setSysConfig(res)
  }
  onBeforeMountOrActivated(async () => {
    await trigger()
    getSysConfig()
  })

  const hasMessage = computed(() =>
    Object.keys(data.value || {}).reduce((pre, cur: any) => {
      pre += data.value![cur].length
      return pre
    }, 0),
  )
</script>
