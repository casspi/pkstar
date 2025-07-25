<template>
  <div class="header-section">
    <ProImg
      class="user-img"
      :def-src="defSrc"
      :src="userinfo?.content.smallImage"
      alt="user"
      @click="handleUserAvatar()"
    />
    <div class="info">
      <span>{{ userinfo?.content.depName }}</span>
      <span> {{ userinfo?.content.realName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUserinfoStore } from '@/stores'
  import { showChooseSourceType } from '@/utils'
  import defSrc from '@/assets/img/default_user.png'

  const { userinfo } = useUserinfoStore()

  const handleUserAvatar = async () => {
    const type = await showChooseSourceType()
    console.log(type)
  }
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .header-section {
    background-color: $color-primary;
    @extend %df;
    @extend %fdc;
    @extend %aic;
  }
  .user-img {
    width: j(60);
    height: j(60);
    border-radius: j(50);
    margin-top: j(10);
  }
  .info {
    text-align: center;
    color: #fff;
    font-size: j(14);
    font-weight: bold;
    margin: j(10) 0;
  }
</style>
