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
    <van-button @click="handleOn" style="margin-bottom: 10px" round block type="primary">
      监听 on
    </van-button>
    <van-button @click="handleOnce" style="margin-bottom: 10px" round block type="primary">
      监听 once
    </van-button>
    <van-button @click="handleSingle" style="margin-bottom: 10px" round block type="primary">
      监听 single
    </van-button>
    <van-button @click="handleOff" style="margin-bottom: 10px" round block type="warning">
      取消 off
    </van-button>
    <van-button @click="handleEmit" style="margin-bottom: 10px" round block type="danger">
      触发 emit
    </van-button>
  </div>

  <dl class="c-result">
    <dt>请求返回结果：</dt>
    <dd>{{ result }}</dd>
  </dl>
</template>

<script setup lang="ts">
  import { reactive, shallowRef, ref } from 'vue'
  import { showConfirmDialog, showToast } from 'vant'
  import { HorField, HorCellGroup, HorCell } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { scanCode } from '../device'
  import * as events from './index'

  const handleTransfer = useTransfer()
  const objForm = reactive({
    name: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入监听事件名',
      clearable: true,
      rules: [{ required: true, message: '请输入监听事件名' }],
    },
    key: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '请输入回调函数对应的key',
      clearable: true,
      rules: [{ required: true, message: '请输入回调函数对应的key' }],
    },
    data: {
      value: '',
      is: shallowRef(HorCell),
      placeholder: '请输入消息',
      clearable: true,
      direction: 'column',
      get: (v: any) => {
        try {
          v = JSON.parse(v)
        } catch {}
        return { data: v }
      },
    },
  })

  const handleScanCode = async (item: any) => {
    const { result } = await scanCode()
    item.value = result
  }

  const result = ref()

  const handleOn = async () => {
    const { name, key } = banana.validate({
      key: objForm.key,
      name: objForm.name,
    })
    events.on({
      key,
      name,
      success: (data) => {
        showConfirmDialog({
          message: `On事件：${name} 回调：${key} 收到消息：${data}`,
        })
      },
    })
    showToast('监听成功')
  }

  const handleOnce = async () => {
    const { name, key } = banana.validate({
      key: objForm.key,
      name: objForm.name,
    })
    events.once({
      key,
      name,
      success: (data) => {
        showConfirmDialog({
          message: `Once事件：${name} 回调：${key} 收到消息：${data}`,
        })
      },
    })
    showToast('监听成功')
  }

  const handleSingle = async () => {
    const { name, key } = banana.validate({
      key: objForm.key,
      name: objForm.name,
    })
    events.single({
      key,
      name,
      success: (data) => {
        showConfirmDialog({
          message: `Single事件：${name} 回调：${key} 收到消息：${data}`,
        })
      },
    })
    showToast('监听成功')
  }

  const handleOff = async () => {
    const options = banana.validate({
      name: objForm.name,
    })
    const key = objForm.key.value
    await showConfirmDialog({
      message: `确认取消事件监听：${name}${key ? ' 函数：' + key : ''}`,
    })
    if (key) {
      options.key = key
    }
    events.off(options)
    showToast('取消成功')
  }

  const handleEmit = async () => {
    const options = banana.validate({
      name: objForm.name,
      data: objForm.data,
    })
    events.emit(options)
    showToast('消息发布')
  }
</script>
