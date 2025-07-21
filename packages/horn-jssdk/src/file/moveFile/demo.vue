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
    HorCellGroup,
    HorActionSheet,
    HorActionSheetInstance,
    HorField,
  } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { chooseImage, chooseVideo } from '../../media'
  import { moveFile } from './index'
  import { showLoadingToast, showToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    from: {
      value: '',
      is: shallowRef(HorCell),
      required: true,
      arrow: true,
      fn: async (item: any) => {
        const { value, type } = await horActionsSheetRef.value.show({
          actions: [
            {
              name: '相册选择图片',
              value: 'album',
              type: 'image',
            },
            {
              name: '相机拍摄图片',
              value: 'camera',
              type: 'image',
            },
            {
              name: '相册选择视频',
              value: 'album',
              type: 'video',
            },
            {
              name: '相机拍摄视频',
              value: 'camera',
              type: 'video',
            },
          ],
        })
        const sourceType = [value]
        const toast = showLoadingToast({ duration: 0 })
        if (type === 'image') {
          const { tempFilePaths } = await chooseImage({
            count: 1,
            sourceType,
          })
          item.value = tempFilePaths[0]
        } else {
          const { tempFilePaths } = await chooseVideo({
            count: 1,
            sourceType,
          })
          item.value = tempFilePaths[0]
        }
        toast.close()
      },
      rules: [{ required: true, message: '请选择本地文件' }],
    },
    to: {
      value: '',
      is: shallowRef(HorField),
      clearable: true,
    },
  })

  const handleTest = async () => {
    const { from, to } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0, message: '移动中...' })
    await moveFile({ from, to })
    toast.close()
    showToast('移动完成')
  }
</script>
