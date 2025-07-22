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
      <template #default v-if="key === 'imgUrl'">
        <div>
          <span class="c-upload-btn">
            <img v-if="item.value" :src="item.value" alt="图" />
            <van-icon name="scan" size="28" v-else />
          </span>
          <p>{{ item.value }}</p>
        </div>
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <hor-action-sheet ref="horActionsSheetRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import { showLoadingToast, showToast } from 'vant'
  import { HorCell, HorCellGroup, HorActionSheet, HorActionSheetInstance } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { saveImageToPhotosAlbum } from './index'
  import { scanCode } from '../../device'
  import { chooseImage } from '../index'
  import { downloadFile } from '../../network'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    imgUrl: {
      value: '',
      is: shallowRef(HorCell),
      required: true,
      direction: 'column',
      fn: async (item: any) => {
        const { value } = await horActionsSheetRef.value.show({
          actions: [
            {
              name: '扫一扫',
              value: 'scan',
            },
            {
              name: '相机',
              value: 'album',
            },
            {
              name: '拍摄',
              value: 'camera',
            },
          ],
        })
        if (value === 'scan') {
          const { result } = await scanCode()
          item.value = result
          return
        }
        const { tempFilePaths } = await chooseImage({
          count: 1,
          sourceType: [value],
        })
        item.value = tempFilePaths[0]
      },
      rules: [{ required: true, message: '请选择图片' }],
    },
  })

  const handleTest = async () => {
    let { imgUrl: filePath } = banana.validate(objForm)
    const taost = showLoadingToast({ duration: 0 })
    if (!filePath.startsWith('http://localhost')) {
      // 网络图
      taost.message = '下载中...'
      const result = await downloadFile({ url: filePath })
      filePath = result.filePath
    }
    taost.message = '保存中...'
    await saveImageToPhotosAlbum({
      filePath,
    })
    taost.close()
    showToast('保存成功')
  }
</script>
