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
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { reactive, shallowRef } from 'vue'
  import { HorField, HorCellGroup } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { makePhoneCall } from './index'

  const handleTransfer = useTransfer()
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
  })

  const handleTest = async () => {
    const options = banana.validate(objForm)
    makePhoneCall(options)
  }
</script>
