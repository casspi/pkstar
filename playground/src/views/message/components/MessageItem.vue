<template>
  <div class="message-item" @click="handlerMessage(item)">
    <VanBadge class="message-avatar" :dot="item.status === 1">
      <img src="/assets/img/img-logo.png" alt="avatar" />
    </VanBadge>
    <div class="message-item-content">
      <div class="message-item-info">
        <h3>{{ item.type === 1 ? '系统消息' : item.source }}</h3>
        <p>
          {{ item.content }}
        </p>
      </div>
      <time>{{ item.time }}</time>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { MessageItem } from '@/types'

  defineProps({
    item: {
      type: Object as PropType<any>,
      default: () => {},
    },
  })
  const router = useRouter()

  const handlerMessage = (item: MessageItem) => {
    // if (item.type === NotificationType.sys) {
    //   router.push({ path: '/message/detail', query: { ...item } })
    // } else {
    //   // router.push('/message/chat')
    // }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
  .message-item {
    @extend %df;
    @extend %aic;
    padding-left: j(16);
    background-color: #fff;
    time {
      @extend %c9;
      font-size: j(12);
    }
  }
  .message-avatar {
    margin-right: j(12);
    img {
      @extend %db;
      border-radius: j(4);
      width: j(44);
      height: j(44);
      background-color: #f2f2f2;
    }
  }
  .message-item-content {
    @extend %df1;
    @extend %oh;
    @extend %df;
    @extend %bwb;
    padding: j(12) j(16) j(12) 0;
  }
  .message-item-info {
    @extend %df1;
    @extend %df;
    @extend %fdc;
    @extend %oh;
    @extend %bsb;
    margin-right: j(16);
    padding: j(1) 0;
    height: j(44);
    h3 {
      @extend %df1;
      @extend %twno;
      font-weight: normal;
      font-size: j(16);
    }
    p {
      @extend %c9;
      @extend %twno;
      margin-top: auto;
      font-size: j(13);
    }
  }
</style>
