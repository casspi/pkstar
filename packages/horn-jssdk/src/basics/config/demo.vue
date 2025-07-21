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
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleSet" round block type="primary">设置配置</van-button>
    <van-button @click="handleGet" style="margin-top: 10px" round block type="warning">
      获取配置
    </van-button>
  </div>

  <dl class="c-result">
    <dt>请求返回结果：</dt>
    <dt>{{ result }}</dt>
  </dl>

  <hor-action-sheet ref="horActionsSheetRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import { showLoadingToast, showToast } from 'vant'
  import { HorCell, HorCellGroup, HorActionSheet, HorActionSheetInstance } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { getConfig, setConfig } from './index'

  const handleTransfer = useTransfer()

  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const objForm = reactive<Record<string, any>>({
    branch: {
      value: '',
      is: shallowRef(HorCell),
      required: true,
      arrow: true,
      fn: async (item: any) => {
        const { value } = await horActionsSheetRef.value.show({
          actions: [
            {
              name: '测试环境',
              value: 'test',
            },
            {
              name: '准生产环境',
              value: 'uat',
            },
            {
              name: '生产环境',
              value: 'master',
            },
          ],
        })
        item.value = value
      },
      rules: [{ required: true, message: '请选择本地文件' }],
    },
  })

  const result = ref()
  const handleGet = async () => {
    result.value = await getConfig()
  }

  const handleSet = async () => {
    const { branch } = banana.validate(objForm)
    const toast = showLoadingToast({ duration: 0 })
    await setConfig({ branch })
    toast.close()
    showToast('设置成功')
  }
</script>
