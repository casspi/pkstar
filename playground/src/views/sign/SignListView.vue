<template>
  <HorView class="attend-list-view">
    <div class="c-bar"></div>
    <div class="user-info">
      <div class="user">
        <img class="avatar" src="@/assets/img/default_user.png" alt="" srcset="" />
        <div class="user-info-content">
          <span class="name">{{ userinfo?.content.realName }}</span>
          <span>本月签到{{ data?.summ.signNum }}次</span>
        </div>
      </div>
      <MonthSelect v-model="currentMonth" />
    </div>
    <div class="c-bar"></div>
    <dl class="sign-list">
      <dd class="sign-list-item" v-for="(item, index) in data?.sign" :key="index">
        <HorIcon class="icon" name="location-o" size="30" />
        <!-- <img src="@/assets/img/icon/woke_sign.png" alt="" srcset="" /> -->
        <div class="sign-list-item-content">
          <span class="sign-list-item-content-date">{{ item.dt }}</span>
          <span class="sign-list-item-content-location">{{ item.locationDetail }}</span>
        </div>
      </dd>
    </dl>
    <div class="c-ios-seat"></div>
  </HorView>
</template>

<script setup lang="ts">
  import { useAsyncTask } from '@pkstar/vue-use'
  import { reqSignRecord } from '@/api'
  import { formatDate } from '@pkstar/utils'
  import MonthSelect from '@/components/MonthPicker.vue'
  import { withLoading } from '@/utils'
  import { useUserinfoStore } from '@/stores'

  const { userinfo } = useUserinfoStore()

  const currentMonth = ref(formatDate(new Date(), 'yyyy-MM'))

  watch(
    () => currentMonth.value,
    () => {
      trigger()
    },
  )

  const { data, error, loading, trigger } = useAsyncTask(
    () => withLoading(reqSignRecord)({ requestMonth: currentMonth.value }),
    {
      immediate: true,
    },
  )
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .user-info {
    padding: j(10) j(15);
    font-size: j(12);
    background-color: #fff;
    @extend %df;
    @extend %jcs;
    @extend %aic;
    .user {
      @extend %df;
      @extend %aic;
    }
    .name {
      font-weight: bold;
      margin-bottom: j(8);
    }
    .user-info-content {
      @extend %df;
      @extend %fdc;
    }
  }
  .avatar {
    width: j(40);
    height: j(40);
    margin-right: j(10);
  }
  .attend-info {
    background-color: #fff;
    padding: j(10) j(15);
    font-size: j(12);
    @extend %df;
    @extend %fww;
    .info-item {
      margin-bottom: j(10);
      width: 50%;
      padding-right: j(50);
      @extend %bsb;
      @extend %df;
      @extend %aic;
      @extend %jcs;
      span {
        color: #666;
      }
    }
    &.attend-info-2 {
      border-top: px(1) solid #f5f5f5;
      .info-item {
        margin-right: 50%;
      }
    }
  }
  .sign-list {
    font-size: j(12);
  }
  .sign-list-title {
    padding: j(10) j(15) j(5);
  }
  .sign-list-item {
    @extend %df;
    padding: j(10) j(15) j(5);
    background-color: #fff;
    &:not(:last-child) {
      border: px(1) solid #f5f5f5;
      // @extend %bw05;
      // @extend %bw05b;
    }
    .icon {
      margin-right: j(8);
      color: #3aadeb;
    }
    .sign-list-item-content {
      @extend %df;
      @extend %fdc;
      .sign-list-item-content-date {
        margin-bottom: j(8);
      }
      .sign-list-item-content-location {
        color: #666;
      }
    }
  }
</style>
