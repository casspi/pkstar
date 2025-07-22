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
      <template #default v-if="key === 'vidoUrl'">
        <div>
          <span class="c-upload-btn">
            <van-icon name="scan" size="28" />
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
  import { saveVideoToPhotosAlbum } from './index'
  import { scanCode } from '../../device'
  import { chooseVideo } from '../index'
  import { downloadFile } from '../../network'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    vidoUrl: {
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
        const { tempFilePaths } = await chooseVideo({
          count: 1,
          sourceType: [value],
        })
        item.value = tempFilePaths[0]
      },
      rules: [{ required: true, message: '请选择视频' }],
    },
  })

  const handleTest = async () => {
    let { vidoUrl: filePath } = banana.validate(objForm)
    const taost = showLoadingToast({ duration: 0 })
    if (!filePath.startsWith('http://localhost')) {
      // 网络视频
      taost.message = '下载中...'
      const result = await downloadFile({ url: filePath })
      filePath = result.filePath
    }
    taost.message = '保存中...'
    await saveVideoToPhotosAlbum({
      filePath,
    })
    taost.close()
    showToast('保存成功')
  }
</script>
