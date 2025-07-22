<template>
  <VanTab class="tab-info-section" :title="title">
    <div class="tab-info-header">
      <h2>{{ title }}</h2>
    </div>
    <slot> </slot>
  </VanTab>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: '',
    },
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .tab-info-section {
    padding: j(20) 0;
    margin-top: j(10);
    background-color: #fff;
    word-break: break-all;
    :deep {
      dl {
        line-height: 1.6;
        margin-top: j(12);
      }
      dt {
        @extend %fwb;
        padding: j(12) j(16);
        font-size: j(16);
        color: #454556;
        margin-top: j(12);
        &:first-child {
          margin-top: 0;
        }
        i {
          @extend %aic;
          @extend %vam;
          @extend %br50;
          @extend %pr;
          display: inline-flex;
          width: j(16);
          height: j(16);
          margin-left: j(16);
          margin-right: j(8);
          background-color: #fddcdc;
          &::before,
          &::after {
            @extend %db;
            @extend %br50;
            @extend %pa;
            @extend %t0;
            flex-shrink: 0;
            content: '';
            width: j(16);
            height: j(16);
          }
          &::before {
            left: j(-8);
            background-color: #dc5f52;
          }
          &::after {
            left: j(-16);
            background-color: #c82d1d;
          }
        }
      }
      dd {
        padding: 0 j(16);
        font-size: j(16);
      }
    }
  }
  .tab-info-header {
    padding: 0 j(32);
    h2 {
      @extend %df;
      @extend %aic;
      @extend %jcc;
      @extend %fwb;
      font-size: j(17);
      color: $color-primary;
      &::before,
      &::after {
        content: '';
        margin: 0 j(10);
        width: j(46);
        height: j(5);
        border-radius: j(3);
        background-color: #fddcdc;
      }
    }
  }
</style>
