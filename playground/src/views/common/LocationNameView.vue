<template>
  <HorView class="">
    <ProSkeleton
      v-if="locationList && !locationList.length"
      :loading="loading"
      :error="error"
      empty-btn-text=""
      @refresh="trigger"
    />
    <VanCell
      v-else
      v-for="item in locationList"
      :key="item.uid"
      :title="item.title"
      @click="handleSelect(item)"
    ></VanCell>
  </HorView>
</template>

<script setup lang="ts">
  import { getLocationNameByPoint, locationNameTrap, withLoading } from '@/utils'
  import { useAsyncTask } from '@pkstar/vue-use'

  const {
    data: locationList,
    loading,
    error,
    trigger,
  } = useAsyncTask(
    async () => {
      const res = await withLoading(getLocationNameByPoint)(121.39751827341932, 31.260512251885345)
      console.log('222', res)
      return res
    },
    {
      immediate: true,
    },
  )

  const router = useRouter()
  const handleSelect = (item: any) => {
    console.log('handleSelect', item)
    locationNameTrap.trigger(item)
    router.back()
    return
  }
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
