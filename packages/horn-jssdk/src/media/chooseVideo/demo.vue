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
      <template #default v-if="['count', 'maxDuration'].includes(key)">
        <van-stepper v-model="item.value" />
      </template>
    </component>
  </hor-cell-group>

  <div style="margin: 32px">
    <van-button @click="handleTest" round block type="primary">测试</van-button>
  </div>

  <dl class="c-result c-photo-group">
    <dt>请求返回结果：</dt>
    <dd v-for="(item, index) in result?.tempFiles" :key="index" @click="handlerPlay(item.path)">
      <img :src="item.cover" />
      <van-icon size="32" color="#fff" name="play-circle" />
    </dd>
    <dt>{{ result }}</dt>
  </dl>

  <hor-action-sheet ref="horActionsSheetRef" />

  <hor-player-popup ref="horPlayerPopupRef" />
</template>

<script setup lang="ts">
  import { reactive, ref, shallowRef } from 'vue'
  import {
    HorCell,
    HorCellGroup,
    HorCheckbox,
    HorActionSheet,
    HorActionSheetInstance,
    HorPlayerPopup,
    HorPlayerPopupInstance,
  } from '@daysnap/horn-ui'
  import { useTransfer } from '@pkstar/vue-use'
  import { banana } from '@pkstar/banana'
  import { chooseVideo, ChooseVideoResult } from './index'
  import { showLoadingToast } from 'vant'

  const handleTransfer = useTransfer()

  const objForm = reactive<Record<string, any>>({
    count: {
      value: 1,
      is: shallowRef(HorCell),
    },
    maxDuration: {
      value: 15,
      is: shallowRef(HorCell),
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

  const result = ref<ChooseVideoResult>()
  const horActionsSheetRef = ref<HorActionSheetInstance>()
  const handleTest = async () => {
    let { sourceType, ...rest } = banana.validate(objForm)
    if (sourceType.length > 1) {
      const { value } = await horActionsSheetRef.value.show({
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
    const toast = showLoadingToast({ duration: 0 })
    result.value = await chooseVideo({
      ...rest,
      sourceType,
    } as Record<string, any>)
    toast.close()
  }

  const horPlayerPopupRef = ref<HorPlayerPopupInstance>()
  const handlerPlay = (url: string) => {
    horPlayerPopupRef.value.show({
      url,
    })
  }
</script>
