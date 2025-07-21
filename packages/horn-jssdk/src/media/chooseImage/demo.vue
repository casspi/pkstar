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
      <template #default v-if="key === 'count'">
        <van-stepper v-model="item.value" />
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <dl class="c-result c-photo-group">
    <dt>请求返回结果：</dt>
    <dd v-for="(item, index) in result?.tempFilePaths" :key="index">
      <img :src="item" />
    </dd>
    <dt>{{ result }}</dt>
  </dl>

  <hor-action-sheet ref="horActionsSheetRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import {
    HorCell,
    HorCellGroup,
    HorCheckbox,
    HorActionSheet,
    HorActionSheetInstance,
  } from '@daysnap/horn-ui'
  import { useTransfer } from '@daysnap/horn-use'
  import { banana } from '@daysnap/banana'
  import { chooseImage, ChooseImageResult } from './index'

  const handleTransfer = useTransfer()

  const objForm = reactive<Record<string, any>>({
    count: {
      value: 1,
      is: shallowRef(HorCell),
    },
    sizeType: {
      value: ['original', 'compressed'],
      is: shallowRef(HorCheckbox),
      options: [
        {
          label: '原图',
          value: 'original',
        },
        {
          label: '压缩',
          value: 'compressed',
        },
      ],
    },
    sourceType: {
      value: ['album'],
      is: shallowRef(HorCheckbox),
      options: [
        {
          label: '相册',
          value: 'album',
        },
        {
          label: '拍摄',
          value: 'camera',
        },
      ],
    },
  })

  const result = ref<ChooseImageResult>()
  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const handleTest = async () => {
    let { sourceType, ...rest } = banana.validate(objForm)
    if (sourceType.length > 1) {
      const { value } = await horActionsSheetRef.value!.show({
        actions: [
          {
            name: '相机',
            value: 'album',
          },
          {
            name: '拍摄',
            value: 'camera',
          },
        ],
      })
      sourceType = [value]
    }
    result.value = await chooseImage({
      ...rest,
      sourceType,
    } as Record<string, any>)
  }
</script>
