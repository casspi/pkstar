<template>
  <HorView use-tab-scroll>
    <VanTabs v-model:active="active" sticky>
      <VanTab :title="item.name" v-for="(item, index) in tabs" :key="index">
        <component
          :ref="(el: any) => (tabContentRefs[index] = el)"
          :is="item.is"
          :title="item.name"
          :type="item.type"
        ></component>
      </VanTab>
    </VanTabs>
  </HorView>
</template>

<script lang="ts">
  import { onBeforeMountOrActivated } from '@/hooks'
  import { noticeListTrap } from '@/utils'
  import { omit } from '@pkstar/utils'
  import { useKeepPosition } from '@pkstar/vue-use'
  import NoticeReadTabContent from './components/NoticeReadTabContent.vue'
  import NoticeUnReadTabContent from './components/NoticeUnReadTabContent.vue'
  import { defineComponent, nextTick, ref } from 'vue'

  export default defineComponent({
    setup() {
      const active = ref(0)
      const tabs = [
        {
          name: '未读',
          is: 'NoticeUnReadTabContent',
          type: 'unread',
        },
        {
          name: '已读',
          is: 'NoticeReadTabContent',
          type: 'read',
        },
      ]

      useKeepPosition({
        getTarget: () => document.querySelector(`.tab-content-${tabs[active.value].type}`)!,
      })
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
        noticeListTrap.create(triggerTabContentRefresh)
      })

      return {
        tabs,
        active,
        tabContentRefs,
      }
    },
    components: {
      NoticeReadTabContent,
      NoticeUnReadTabContent,
    },
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
