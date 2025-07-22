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
  import { HorCellGroup, HorRadio } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { vibrateShort } from './index'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    type: {
      value: 'heavy',
      is: shallowRef(HorRadio),
      options: [
        { label: '轻度', value: 'heavy' },
        { label: '中度', value: 'medium' },
        { label: '重度', value: 'light' },
      ],
    },
  })

  const handleTest = async () => {
    const options = banana.validate(objForm)
    vibrateShort(options)
  }
</script>
