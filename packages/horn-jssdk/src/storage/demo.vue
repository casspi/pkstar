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
    <van-button @click="handleGetStorage" style="margin-bottom: 10px" round block type="default">
      获取
    </van-button>
    <van-button @click="handleSetStorage" style="margin-bottom: 10px" round block type="primary">
      存储
    </van-button>
    <van-button @click="handleRemoveStorage" style="margin-bottom: 10px" round block type="warning">
      删除
    </van-button>
    <van-button @click="handlerClearStorage" style="margin-bottom: 10px" round block type="danger">
      清除
    </van-button>
  </div>

  <dl class="c-result">
    <dt>请求返回结果：</dt>
    <dd>{{ result }}</dd>
  </dl>
</template>

<script setup lang="ts">
  import { reactive, shallowRef, ref } from 'vue'
  import { showConfirmDialog, showLoadingToast, showToast } from 'vant'
  import { HorField, HorCellGroup, HorCell } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { scanCode } from '../device'
  import { clearStorage, removeStorage, getStorage, setStorage } from './index'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    key: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入存储KEY',
      clearable: true,
      required: true,
      rules: [{ required: true, message: '请输入存储KEY' }],
    },
    data: {
      value: '',
      is: shallowRef(HorCell),
      placeholder: '请输入存储数据',
      clearable: true,
      required: true,
      direction: 'column',
      get: (v: any) => {
        try {
          v = JSON.parse(v)
        } catch {}
        return { data: v }
      },
      rules: [{ required: true, message: '请输入存储数据' }],
    },
  })

  const handleScanCode = async (item: any) => {
    const { result } = await scanCode()
    item.value = result
  }

  const result = ref()
  const handleGetStorage = async () => {
    const { key } = banana.validate({ key: objForm.key })
    const toast = showLoadingToast({ duration: 0 })
    result.value = await getStorage({ key })
    toast.close()
    showToast('获取成功')
  }

  const handleSetStorage = async () => {
    const { key, data } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0 })
    await setStorage({ key, data })
    toast.close()
    showToast('设置成功')
  }

  const handleRemoveStorage = async () => {
    const { key } = banana.validate({ key: objForm.key })
    await showConfirmDialog({ message: `确认删除${key}存储数据？` })
    const toast = showLoadingToast({ duration: 0 })
    await removeStorage({ key })
    toast.close()
    showToast('删除成功')
  }

  const handlerClearStorage = async () => {
    await showConfirmDialog({ message: `确认清除所有存储数据？` })
    const toast = showLoadingToast({ duration: 0 })
    await clearStorage()
    toast.close()
    showToast('清除成功')
  }
</script>
