<template>
  <HorView class="">
    <div class="c-bar"></div>
    <ProSchemaForm :metadata="fields"> </ProSchemaForm>

    <HorDatePicker ref="datePickerInstance"></HorDatePicker>

    <div class="c-br"></div>
    <HorFixedActions>
      <VanButton class="c-button" type="primary" @click="handleSubmit">提交</VanButton>
    </HorFixedActions>
  </HorView>
</template>

<script setup lang="ts">
  import { reqLeaveInfo } from '@/api'
  import { useProSchemaForm } from '@/components'
  import { useLeaveTypeField } from '@/hooks'
  import type { HorDatePickerInstance } from '@daysnap/horn-ui'
  import banana from '@pkstar/banana'

  const datePickerInstance = ref() as Ref<HorDatePickerInstance>
  const fields = useProSchemaForm({
    type: useLeaveTypeField({}),
    isAllDay: {
      value: 'Y',
      label: '是否整天',
      is: 'HorRadio',
      options: [
        { label: '是', value: 'Y' },
        { label: '否', value: 'N' },
      ],
      props: {},
    },
    start: {
      value: '',
      label: '开始时间',
      is: 'HorCellPicker',
      props: {
        clearable: true,
        placeholder: '请选择开始时间',
      },
      async fn(item) {
        ;({ value: item.value } = await datePickerInstance.value.show({
          modelValue: item.value,
        }))
        fields.end.value = ''
      },
      rules: [{ required: true, message: '请选择开始时间' }],
    },
    end: {
      value: '',
      label: '结束时间',
      is: 'HorCellPicker',
      props: {
        clearable: true,
        placeholder: '请选择结束时间',
      },
      async fn(item) {
        ;({ value: item.value } = await datePickerInstance.value.show({
          modelValue: item.value,
          minDate: new Date(fields.start.value || '2015-01-01'),
        }))
      },
      rules: [{ required: true, message: '请选择结束时间' }],
    },
    leaveDays: {
      value: '',
      label: '请假天数',
      is: 'HorField',
      disabled: true,
      props: {
        placeholder: '天数',
      },
    },
    reason: {
      value: '',
      label: '请假说明',
      is: 'HorTextarea',
      props: {
        class: 'c-m10',
        maxlength: 100,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入请假说明' }],
    },
    file: {
      value: [],
      label: '上传附件',
      is: 'HorUploader',
      props: {
        maxCount: 9,
        direction: 'column',
      },
    },
  })

  const handleSubmit = async () => {
    const options = await banana.validate(fields)
    console.log('options=>', options)
  }
  onBeforeMount(async () => {
    const res = await reqLeaveInfo()
    console.log('value=>', res)
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
