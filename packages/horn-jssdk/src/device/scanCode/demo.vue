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

  <dl class="c-result">
    <dt>请求返回结果：</dt>
    <dd>{{ result }}</dd>
  </dl>
</template>

<script setup lang="ts">
  import { HorRadio, HorCellGroup } from '@daysnap/horn-ui'
  import { reactive, shallowRef, ref } from 'vue'
  import { useTransfer } from '@daysnap/horn-use'
  import { scanCode } from './index'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    onlyFromCamera: {
      value: false,
      is: shallowRef(HorRadio),
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    flashlight: {
      value: true,
      is: shallowRef(HorRadio),
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
  })

  const result = ref()
  const handleTest = async () => {
    const options = Object.keys(objForm).reduce<Record<string, any>>((result, key) => {
      result[key] = objForm[key].value
      return result
    }, {})
    result.value = await scanCode(options)
  }
</script>
