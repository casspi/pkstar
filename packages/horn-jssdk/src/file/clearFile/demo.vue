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
  import { HorCellGroup, HorActionSheet, HorActionSheetInstance, HorField } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { clearFile } from './index'
  import { showLoadingToast, showToast } from 'vant'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    dir: {
      value: '',
      is: shallowRef(HorField),
      required: true,
      clearable: true,
      rules: [{ required: true, message: '请填写文件夹名称' }],
    },
  })

  const handleTest = async () => {
    const { dir } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0, message: '删除中...' })
    await clearFile({ dir })
    toast.close()
    showToast('删除成功')
  }
</script>
