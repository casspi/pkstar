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
      <template #suffix v-if="key === 'url'">
        <van-icon @click="handleScanCode(item)" name="scan" size="20" style="margin-left: 10px" />
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
  import { HorField, HorCellGroup, HorActionSheet, HorActionSheetInstance } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { scanCode } from '../../device'
  import { downloadFile } from '../../network'
  import { openDocument } from '.'
  import { showLoadingToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    url: {
      value: '',
      label: '文件地址',
      is: shallowRef(HorField),
      required: true,
      clearable: true,
      fn: async (item: any) => {
        const { result } = await scanCode()
        item.value = result
      },
      rules: [{ required: true, message: '请选择在线文件' }],
    },
  })

  const handleScanCode = async (item: any) => {
    const { result } = await scanCode()
    item.value = result
  }

  const handleTest = async () => {
    const { url } = banana.validate(objForm)
    const toast = showLoadingToast({ message: '下载中...', duration: 0 })
    const { filePath } = await downloadFile({ url })
    toast.message = '正在打开...'
    const fileType: any = filePath.substring(filePath.lastIndexOf('.') + 1)
    await openDocument({ filePath, fileType })
    toast.close()
  }
</script>
