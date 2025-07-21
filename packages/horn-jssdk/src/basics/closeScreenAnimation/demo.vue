<template>
  <hor-cell-group inset>
    <component
      v-for="(item, key) in objForm"
      :key="key"
      :is="item.is"
      :label="key"
      @click="handleTransfer(item)"
      v-bind="item"
      v-model="item.value"
    >
      <template #suffix v-if="item.useScan">
        <van-icon @click="handleScanCode" name="scan" size="20" style="margin-left: 10px" />
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { reactive, shallowRef } from 'vue'
  import { showConfirmDialog } from 'vant'
  import { HorField, HorCellGroup } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { scanCode } from '../../device'
  import { closeScreenAnimation, openScreenAnimation } from '../'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    iconUrl: {
      value: '',
      is: shallowRef(HorField),
      useScan: true,
      clearable: true,
    },
    title: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入动画页面标题文字',
      clearable: true,
      useScan: false,
    },
  })

  const handleScanCode = async () => {
    const { result } = await scanCode()
    objForm.iconUrl.value = result
  }

  const handleTest = async () => {
    const options = banana.validate(objForm)
    await showConfirmDialog({
      message: `打开开屏动画后，3S后关闭.`,
    })
    openScreenAnimation(options)
    setTimeout(() => {
      closeScreenAnimation()
    }, 3000)
  }
</script>
