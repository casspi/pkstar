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
      <template #default>
        <span>已选{{ item.value.length }}个文件</span>
      </template>
    </component>
  </hor-cell-group>

  <dl class="c-result">
    <dt>选择的本地文件：</dt>
    <dd v-for="(item, index) in objForm.filePaths.value" :key="index">{{ item }}</dd>
  </dl>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <dl class="c-result">
    <dt>请求返回结果：</dt>
    <dt>{{ result }}</dt>
  </dl>

  <hor-action-sheet ref="horActionsSheetRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import { HorCell, HorCellGroup, HorActionSheet, HorActionSheetInstance } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { chooseImage, chooseVideo } from '../../media'
  import { compressFile, CompressFileResult } from './index'
  import { showLoadingToast, showToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    filePaths: {
      value: [],
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
            count: 9,
            sourceType,
          })
          item.value.push(...tempFilePaths)
        } else {
          const { tempFilePaths } = await chooseVideo({
            count: 9,
            sourceType,
          })
          item.value.push(...tempFilePaths)
        }
        toast.close()
      },
      rules: [{ required: true, message: '请选择本地文件' }],
    },
  })

  const result = ref<CompressFileResult>()
  const handleTest = async () => {
    const { filePaths } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0, message: '压缩中...' })
    result.value = await compressFile({ filePaths })
    toast.close()
    showToast('压缩成功')
  }
</script>
