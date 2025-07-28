<template>
  <HorView use-tab-scroll>
    <VanTabs v-model:active="active" sticky>
      <VanTab :title="item.name" v-for="(item, index) in tabs" :key="index">
        <ApplyMyTabContent
          :ref="(el: any) => (tabContentRefs[index] = el)"
          :title="item.name"
          :type="item.type"
        ></ApplyMyTabContent>
      </VanTab>
    </VanTabs>
  </HorView>
</template>

<script lang="ts" setup>
  import { onBeforeMountOrActivated } from '@/hooks'
  import { applyListTrap } from '@/utils'
  import { omit } from '@pkstar/utils'
  import { useKeepAlive, useKeepPosition } from '@pkstar/vue-use'
  import ApplyMyTabContent from './components/ApplyMyTabContent.vue'
  import { nextTick, ref } from 'vue'

  useKeepAlive()
  useKeepPosition({
    getTarget: () => document.querySelector(`.tab-content-${tabs[active.value].type}`)!,
  })

  const active = ref(0)
  const tabs = [
    {
      name: '未审批',
      type: 'init',
    },
    {
      name: '进行中',
      type: 'part',
    },
    {
      name: '通过',
      type: 'pass',
    },
    {
      name: '拒绝',
      type: 'deny',
    },
    {
      name: '撤回',
      type: 'withdraw',
    },
  ]

  // 获取实例
  const tabContentRefs = ref<any[]>([])
  const triggerTabContentRefresh = (data: string | Record<string, any>) => {
    const type = typeof data === 'string' ? data : data.type
    active.value = tabs.findIndex((tab) => tab.type === type)
    const ref = tabContentRefs.value[active.value]

    nextTick(() => {
      if (typeof data !== 'string') {
        // 更新字段
        const pagingData: any[] = ref?.pagingData
        const item = pagingData.find((item) => item.id === data.id)
        Object.assign(item, omit(data, ['id', 'type']))
      } else {
        // 刷新列表
        ref?.pagingRefresh(true)
      }
    })
  }

  onBeforeMountOrActivated(() => {
    applyListTrap.create(triggerTabContentRefresh)
  })

  defineExpose({
    tabs,
    active,
    tabContentRefs,
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
