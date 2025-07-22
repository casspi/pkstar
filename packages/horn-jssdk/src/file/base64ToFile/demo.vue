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
    <van-button @click="handleFileToBase64" round block type="primary">文件转base64</van-button>
    <van-button @click="handleBase64ToFile" round block type="warning" style="margin-top: 16px">
      base64转文件
    </van-button>
  </div>

  <dl class="c-result c-photo-group">
    <dt>文件转base64图片：</dt>
    <dd v-if="base64Result?.base64">
      <img :src="base64Result.base64" />
    </dd>
    <dt>base64转文件图片</dt>
    <dd v-if="fileResult?.filePath">
      <img :src="fileResult.filePath" />
    </dd>
  </dl>

  <hor-action-sheet ref="horActionsSheetRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import { HorCell, HorCellGroup, HorActionSheet, HorActionSheetInstance } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { chooseImage } from '../../media'
  import { base64ToFile, Base64ToFileResult, fileToBase64, FileToBase64Result } from '..'
  import { showLoadingToast, showToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    filePath: {
      value: '',
      is: shallowRef(HorCell),
      required: true,
      arrow: true,
      fn: async (item: any) => {
        const { value } = await horActionsSheetRef.value.show({
          actions: [
            {
              name: '相册选择图片',
              value: 'album',
            },
            {
              name: '相机拍摄图片',
              value: 'camera',
            },
          ],
        })
        const sourceType = [value]
        const toast = showLoadingToast({ duration: 0 })
        const { tempFilePaths } = await chooseImage({
          count: 1,
          sourceType,
        })
        item.value = tempFilePaths[0]
        toast.close()
      },
      rules: [{ required: true, message: '请选择本地文件' }],
    },
  })

  const base64Result = ref<FileToBase64Result>()
  const handleFileToBase64 = async () => {
    const { filePath } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0, message: '转换中...' })
    base64Result.value = await fileToBase64({ filePath })
    toast.close()
    showToast('转换成功')
  }

  const fileResult = ref<Base64ToFileResult>()
  const handleBase64ToFile = async () => {
    if (!base64Result.value) {
      return showToast('请先生成base64数据')
    }
    const toast = showLoadingToast({ duration: 0, message: '转换中...' })
    fileResult.value = await base64ToFile(base64Result.value)
    toast.close()
    showToast('转换成功')
  }
</script>
