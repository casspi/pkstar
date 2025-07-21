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
      <template #default v-if="key === 'urls'">
        <div>
          <span class="c-upload-btn">
            <img v-if="item.value" :src="item.value" alt="图" />
            <van-icon name="plus" size="28" v-else />
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
  import { HorCell, HorCellGroup, HorActionSheet, HorActionSheetInstance } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { chooseImage } from '../../media'
  import { scanCode } from '../../device'
  import { previewImage } from '.'
  import { showLoadingToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    urls: {
      value: [],
      label: '图片',
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
              name: '相册选择图片',
              value: 'album',
            },
            {
              name: '相机拍摄图片',
              value: 'camera',
            },
          ],
        })
        if (value === 'scan') {
          const { result } = await scanCode()
          item.value.push(result)
          return
        }
        const sourceType = [value]
        const toast = showLoadingToast({ duration: 0 })
        const { tempFilePaths } = await chooseImage({
          count: 9,
          sourceType,
        })
        item.value.push(tempFilePaths[0])
        toast.close()
      },
      direction: 'column',
      rules: [{ required: true, message: '请选择预览图片' }],
    },
  })

  const handleTest = async () => {
    const { urls } = banana.validate(objForm)
    await previewImage({ urls })
  }
</script>
