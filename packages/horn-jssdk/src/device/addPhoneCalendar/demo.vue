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
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { addPhoneContact } from './index'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    name: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入名字',
      clearable: true,
      required: true,
      rules: [{ required: true, message: '请输入名字' }],
    },
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
    await addPhoneContact(options)
  }
</script>
