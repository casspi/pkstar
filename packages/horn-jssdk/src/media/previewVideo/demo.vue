<template>
  <hor-cell-group>
    <component
      v-for="(item, key) in objForm"
      :key="key"
      :is="item.is"
      @click="handleTransfer(item)"
      :label="key"
      v-bind="item"
      v-model="item.value"
    >
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <hor-action-sheet ref="horActionsSheetRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import {
    HorCell,
    HorRadio,
    HorCellGroup,
    HorActionSheet,
    HorActionSheetInstance,
  } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { chooseVideo } from '../../media'
  import { scanCode } from '../../device'
  import { previewVideo } from '.'
  import { showLoadingToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    current: {
      value: '',
      label: '视频地址',
      is: shallowRef(HorCell),
      required: true,
      arrow: true,
      fn: async (item: any) => {
        const { value } = await horActionsSheetRef.value.show({
          actions: [
            {
              name: '扫一扫',
              value: 'scan',
            },
            {
              name: '相册选择视频',
              value: 'album',
            },
            {
              name: '相机拍摄视频',
              value: 'camera',
            },
          ],
        })
        if (value === 'scan') {
          const { result } = await scanCode()
          item.value = result
          return
        }
        const sourceType = [value]
        const toast = showLoadingToast({ duration: 0 })
        const { tempFilePaths } = await chooseVideo({
          count: 1,
          sourceType,
        })
        item.value = tempFilePaths[0]
        toast.close()
      },
      rules: [{ required: true, message: '请选择预览图片' }],
    },
    mute: {
      value: false,
      is: shallowRef(HorRadio),
      required: true,
      label: '是否静音',
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    autoplay: {
      value: false,
      is: shallowRef(HorRadio),
      required: true,
      label: '是否自动播放',
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
  })

  const handleTest = async () => {
    const { current, ...rest } = banana.validate(objForm)
    await previewVideo({ current, ...rest })
  }
</script>
