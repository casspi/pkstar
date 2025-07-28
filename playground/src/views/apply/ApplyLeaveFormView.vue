<template>
  <HorView class="">
    <div class="c-bar"></div>
    <ProSchemaForm :metadata="fields"> </ProSchemaForm>

    <HorDatePicker ref="datePickerInstance"></HorDatePicker>

    <HorDateTimePicker
      ref="dateTimePickerInstance"
      value-format="yyyy/MM/dd hh:mm"
      :columns-type="['year', 'month', 'day', 'hour', 'minute']"
    ></HorDateTimePicker>

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
  import type { HorDatePickerInstance, HorDateTimePickerInstance } from '@daysnap/horn-ui'
  import banana from '@pkstar/banana'
  import { formatDate } from '@pkstar/utils/src/formatDate.js'
  import { useQuery } from '@pkstar/vue-use'

  const { detail } = useQuery()
  const datePickerInstance = ref() as Ref<HorDatePickerInstance>
  const dateTimePickerInstance = ref() as Ref<HorDateTimePickerInstance>

  const fields = useProSchemaForm({
    typeName: useLeaveTypeField({}),
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
    startDt: {
      value: '',
      label: '开始时间',
      is: 'HorCellPicker',
      props: {
        clearable: true,
        placeholder: '请选择开始时间',
      },
      async fn(item) {
        if (fields.isAllDay.value === 'Y') {
          ;({ value: item.value } = await datePickerInstance.value.show({
            modelValue: item.value,
          }))
        } else {
          console.log('222', `${formatDate(Date.now(), 'yyyy/MM/dd')} 08:15`)
          ;({ value: item.value } = await dateTimePickerInstance.value.show({
            modelValue: item.value || `${formatDate(Date.now(), 'yyyy/MM/dd ')} 08:15`,
          }))
        }

        fields.endDt.value = ''
      },
      rules: [{ required: true, message: '请选择开始时间' }],
    },
    endDt: {
      value: '',
      label: '结束时间',
      is: 'HorCellPicker',
      props: {
        clearable: true,
        placeholder: '请选择结束时间',
      },
      async fn(item) {
        if (fields.isAllDay.value === 'Y') {
          ;({ value: item.value } = await datePickerInstance.value.show({
            modelValue: item.value,
            minDate: new Date(fields.startDt.value || '2015/01/01'),
          }))
        } else {
          ;({ value: item.value } = await dateTimePickerInstance.value.show({
            modelValue: item.value,
            minDate: new Date(fields.startDt.value || '2015/01/01 00:00'),
          }))
        }
      },
      rules: [{ required: true, message: '请选择结束时间' }],
    },
    // leaveDays:
    days: {
      value: '',
      label: '请假天数',
      is: 'HorField',
      disabled: true,
      props: {
        placeholder: '天数',
      },
      hidden: () => fields.isAllDay.value === 'N',
    },
    hours: {
      value: '',
      label: '请假小时',
      is: 'HorField',
      disabled: true,
      props: {
        placeholder: '小时',
      },
      hidden: () => fields.isAllDay.value === 'Y',
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

  watch(
    () => fields.startDt.value,
    (val) => {
      if (!val) {
        fields.endDt.value = ''
      }
    },
  )
  watch(
    () => fields.isAllDay.value,
    (val) => {
      console.log('watch-val=>', val)
      fields.endDt.value = ''
      fields.startDt.value = ''
    },
  )
  watchEffect(() => {
    if (fields.startDt.value && fields.endDt.value) {
      console.log('fields.startDt.value=>', fields.startDt.value)
      console.log('fields.endDt.value=>', fields.endDt.value)
      const start = new Date(fields.startDt.value).getTime()
      const end = new Date(fields.endDt.value).getTime()
      if (fields.isAllDay.value === 'Y') {
        const diff = end - start
        const days = diff / (1000 * 60 * 60 * 24)
        console.log('days=>', days)
        fields.days.value = days + 1
      } else {
        const diff = end - start
        const hours = diff / (1000 * 60 * 60)
        console.log('hours=>', hours)
        fields.hours.value = Math.ceil(hours)
      }
    } else {
      fields.days.value = ''
    }
  })

  const handleSubmit = async () => {
    const options = await banana.validate(fields)
    console.log('options=>', options)
  }
  onBeforeMount(async () => {
    const res = await reqLeaveInfo()
    console.log('value=>', res)
    if (detail) {
      const { endDt, startDt, ...res } = JSON.parse(detail)
      console.log('onBeforeMount=>', res)
      banana.assignment(
        {
          startDt: formatDate(startDt, 'yyyy/MM/dd'),
          endDt: formatDate(endDt, 'yyyy/MM/dd'),
          ...res,
        },
        fields,
      )
    }
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
