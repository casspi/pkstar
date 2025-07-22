<template>
  <div class="info-cell" @click="handleSelect(item)">
    <div class="info-cell-content">
      <div class="info-cell-info">
        <p>
          {{ item.title }}
        </p>
        <time>{{ item.createDt }}</time>
      </div>
      <img :src="item.coverUrl" alt="cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    useInformationHandle,
    type UseInformationHandleItem,
    type UseInformationHandleOptions,
  } from '@/hooks'

  const props = defineProps({
    item: {
      type: Object as PropType<UseInformationHandleItem>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<UseInformationHandleOptions['type']>,
      required: true,
    },
  })

  const handleSelect = useInformationHandle({ type: props.type })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .info-cell {
    @extend %db;
    background-color: #fff;
    padding: 0 j(16);
    &:last-child {
      .info-cell-content {
        @extend %dan;
      }
    }
  }
  .info-cell-content {
    @extend %df;
    @extend %aic;
    @extend %cp;
    @extend %ao8;
    @extend %bwb;
    padding: j(12) 0;
    img {
      border-radius: j(6);
      object-fit: cover;
      object-position: center;
      width: j(100);
      height: j(68);
      margin-left: j(10);
    }
  }
  .info-cell-info {
    @extend %df1;
    @extend %df;
    @extend %fdc;
    min-height: j(68);
    p {
      @extend %c3;
      @include twno(2);
      font-size: j(15);
    }
    time {
      margin-top: auto;
      color: #83889a;
      font-size: j(10);
    }
  }
</style>
