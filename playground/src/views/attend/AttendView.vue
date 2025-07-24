<template>
  <HorView class="attend-view" @right="handleRight">
    <template #right>
      <HorIcon name="bar-chart-o" size="20" />
    </template>
    <p class="title">{{ nowStr }}</p>
    <div class="attend-card">
      <div class="card-item"><span>上班时间：</span>8:15</div>
      <div class="card-item"><span>上班时间：</span>8:15</div>
      <div class="card-item"><span>上班时间：</span>8:15</div>
      <div class="card-item"><span>下班时间：</span>8:15</div>
    </div>
    <div id="bmap-warp"></div>
    <div class="attend-btn" @click="handleAttend">
      <span>{{ time }}</span>
      上班打卡
    </div>
    <!-- 打卡弹框 -->
    <SignPopup ref="signPopupRef" />
  </HorView>
</template>

<script setup lang="ts">
  import { doAttend, reqFaceCheck } from '@/api'
  import { useUserinfoStore } from '@/stores'
  import { appendBmap, isApp } from '@/utils'
  import { formatDate, isIOS } from '@pkstar/utils'
  import { showSuccessToast } from 'vant'
  import SignPopup from '@/components/SignPopup.vue'
  import { useKeepAlive } from '@pkstar/vue-use'

  const router = useRouter()
  const { userinfo } = useUserinfoStore()
  useKeepAlive()

  const now = new Date()
  const nowStr = formatDate(now, 'yyyy年MM月dd日 hh:mm:ss')
  const week = now.getDay()
  const weekStr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][week]
  const time = now.getHours() + ':' + now.getMinutes()

  const signPopupRef = ref<InstanceType<typeof SignPopup>>()

  const handleRight = () => {
    router.push('/attend/attend-list')
  }
  const handleAttend = async () => {
    if (isApp) {
      const res = await reqFaceCheck({
        dataId: `${isIOS() ? 'ios' : 'android'}${Date.now()}`,
        username: userinfo?.content.mobile!,
        image: 'base64',
      })
      if (res !== '0') {
        router.back()
        throw '非本人打卡，系统不允许'
      }
    }

    const remarkData = await signPopupRef.value?.show()
    await doAttend({
      longitude: '121.386341',
      latitude: '31.256662',
      type: 'attend',
      attendType: 'startwork',
      ...remarkData!,
    })
    showSuccessToast('打卡成功')
  }
  onMounted(async () => {
    await appendBmap()
    const longitude = 116.404
    const latitude = 39.915
    // 百度地图API功能
    const map = new BMap.Map('bmap-warp') //,{minZoom:18.5,maxZoom:18.5}
    const point = new BMap.Point(longitude, latitude)
    map.centerAndZoom(point, 15) // 初始化地图,设置中心点坐标和地图级别

    map.clearOverlays()
    const bpt = new BMap.Point(longitude, latitude)
    const marker = new BMap.Marker(bpt) // 创建标注
    //   marker.enableDragging(); // 不可拖拽
    // map.centerAndZoom(bpt, 15);
    map.addOverlay(marker)
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .title {
    line-height: j(40);
    color: $color-primary;
    text-align: center;
    font-size: j(14);
  }
  .attend-card {
    @extend %df;
    @extend %fww;
    font-size: j(13);

    padding: j(10) j(15);
    background-color: #fff;
    .card-item {
      width: 50%;
      line-height: j(20);
      span {
        color: #999;
      }
    }
  }
  #bmap-warp {
    flex: 1;
  }

  .attend-btn {
    position: fixed;
    bottom: j(60);
    left: 50%;
    transform: translateX(-50%);
    width: j(80);
    height: j(80);
    background-color: $color-primary;
    color: #fff;
    border-radius: j(50);
    font-size: j(14);
    span {
      font-size: j(20);
    }
    @extend %df;
    @extend %fdc;
    @extend %aic;
    @extend %jcc;
  }
</style>
