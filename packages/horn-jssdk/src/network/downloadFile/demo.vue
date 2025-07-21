<template>
  <hor-cell-group>
    <component
      v-for="(item, key) in objForm"
      :key="key"
      :is="item.is"
      @click="handleTransfer(item)"
      :label="key"
      v-bind="item"
      v-model="item.value"
    >
      <template #default v-if="key === 'timeout'">
        <van-stepper v-model="item.value" />
      </template>
      <template #default v-else-if="key === 'url'">
        <div>
          <span class="c-upload-btn">
            <img v-if="item.value" :src="item.value" alt="图" />
            <van-icon name="scan" size="28" v-else />
          </span>
          <p>{{ item.value }}</p>
        </div>
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <dl class="c-result c-photo-group">
    <dt>请求返回结果：</dt>
    <dd v-if="result?.filePath">
      <img :src="result.filePath" />
    </dd>
    <dt>{{ result }}</dt>
  </dl>
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import { showLoadingToast, showToast } from 'vant'
  import { HorCell, HorCellGroup, HorField } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { downloadFile, DownloadFileResult } from './index'
  import { scanCode } from '../../device'

  const handleTransfer = useTransfer()

  const objForm = reactive<Record<string, any>>({
    url: {
      value: '',
      is: shallowRef(HorCell),
      required: true,
      direction: 'column',
      fn: async (item: any) => {
        const { result } = await scanCode()
        item.value = result
      },
      rules: [{ required: true, message: '请选择在线文件' }],
    },
    filePath: {
      value: '',
      is: shallowRef(HorField),
      placeholder: '指定文件下载后存储的路径 (本地路径)',
      get: (v: any) => (v ? v : {}),
    },
    timeout: {
      value: 60,
      is: shallowRef(HorCell),
      get: (v: any) => v * 1000,
    },
  })

  const result = ref<DownloadFileResult>()
  const handleTest = async () => {
    const { url, ...rest } = banana.validate(objForm)
    const toast = showLoadingToast({ message: '下载中...', duration: 0 })
    result.value = await downloadFile({
      url,
      ...rest,
    })
    toast.close()
    showToast('下载成功')
  }
</script>
