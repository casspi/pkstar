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
    ></component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>
</template>

<script setup lang="ts">
  import { reactive, shallowRef } from 'vue'
  import { HorRadio, HorCellGroup } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { setStatusBarStyle } from './index'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    theme: {
      value: 'dark',
      is: shallowRef(HorRadio),
      required: true,
      options: [
        { label: '暗色调', value: 'dark' },
        { label: '亮色调', value: 'light' },
      ],
    },
  })

  const handleTest = () => {
    const options = banana.validate(objForm)
    setStatusBarStyle(options as any)
  }
</script>
