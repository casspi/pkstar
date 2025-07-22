<template>
  <hor-cell-group>
    <component
      v-for="(item, key) in objForm"
      :key="key"
      :is="item.is"
      :label="key"
      @click="handleTransfer(item)"
      v-bind="item"
      v-model="item.value"
    >
      <template #suffix>
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
  import { HorField, HorCellGroup } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { navigateBack } from './index'
  import { scanCode } from '../../device'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    url: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入地址',
      clearable: true,
      required: true,
      rules: [{ required: true, message: '请输入地址' }],
    },
  })

  const handleScanCode = async () => {
    const { result } = await scanCode()
    objForm.url.value = result
  }

  const handleTest = async () => {
    banana.validate(objForm)
    navigateBack()
  }
</script>
