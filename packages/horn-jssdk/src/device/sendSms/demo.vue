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
      <template #label v-if="['content'].includes(key)">
        <span>{{ key }}</span>
        <van-icon @click="handleScanCode(item)" name="scan" size="20" style="margin-left: auto" />
      </template>
      <template #default v-if="['content'].includes(key)">
        <textarea
          class="c-textarea"
          :placeholder="item.placeholder"
          v-model="item.value"
        ></textarea>
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { reactive, shallowRef } from 'vue'
  import { showLoadingToast, showToast } from 'vant'
  import { HorCellGroup, HorCell, HorField } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { sendSms } from './index'
  import { scanCode } from '../index'

  const handleTransfer = useTransfer()

  const handleScanCode = async (item: any) => {
    const { result } = await scanCode()
    item.value = result
  }

  const objForm = reactive({
    phoneNumber: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入手机号',
      clearable: true,
      required: true,
      type: 'tel',
      maxlength: 11,
      rules: [{ required: true, message: '请输入手机号' }],
    },
    content: {
      value: '',
      is: shallowRef(HorCell),
      placeholder: '请输入内容',
      clearable: true,
      required: true,
      direction: 'column',
      rules: [{ required: true, message: '请输入内容' }],
    },
  })

  const handleTest = async () => {
    const options = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0 })
    await sendSms(options)
    toast.close()
    showToast('复制成功')
  }
</script>
