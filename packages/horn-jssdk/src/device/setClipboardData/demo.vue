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
      <template #label v-if="['data'].includes(key)">
        <span>{{ key }}</span>
        <van-icon @click="handleScanCode(item)" name="scan" size="20" style="margin-left: auto" />
      </template>
      <template #default v-if="['data'].includes(key)">
        <textarea
          class="c-textarea"
          :placeholder="item.placeholder"
          v-model="item.value"
        ></textarea>
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleCopy" round block type="primary">复制</van-button>
    <van-button @click="handlePaste" style="margin-top: 10px" round block type="warning">
      粘贴
    </van-button>
  </div>

  <dl class="c-result">
    <dt>结果：</dt>
    <dd>{{ result }}</dd>
  </dl>
</template>

<script setup lang="ts">
  import { reactive, shallowRef, ref } from 'vue'
  import { HorCellGroup, HorCell } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { getClipboardData, setClipboardData } from '../index'
  import { scanCode } from '../index'
  import { showLoadingToast, showToast } from 'vant'

  const handleTransfer = useTransfer()

  const handleScanCode = async (item: any) => {
    const { result } = await scanCode()
    item.value = result
  }

  const objForm = reactive({
    data: {
      value: '',
      is: shallowRef(HorCell),
      placeholder: '请输入数据',
      clearable: true,
      required: true,
      direction: 'column',
      rules: [{ required: true, message: '请输入数据' }],
    },
  })

  const handleCopy = async () => {
    const { data } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0 })
    await setClipboardData({ data })
    toast.close()
    showToast('复制成功')
  }

  const result = ref()
  const handlePaste = async () => {
    const toast = showLoadingToast({ duration: 0 })
    result.value = await getClipboardData()
    toast.close()
    showToast('粘贴成功')
  }
</script>
