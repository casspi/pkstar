<template>
  <HorView class="profile-view" @click="handleSubmit">
    <template #right>
      <span>确定</span>
    </template>
    <ProSchemaForm :metadata="metadata"> </ProSchemaForm>
  </HorView>
</template>

<script setup lang="ts">
  import { useProSchemaForm } from '@/components'
  import { useUserinfoStore } from '@/stores'
  import { NOTICE_METHOD } from '@/utils'
  import banana from '@pkstar/banana'
  import { isEmail } from '@pkstar/utils'
  const { userinfo } = useUserinfoStore()
  const metadata = useProSchemaForm({
    realName: {
      value: '',
      label: '姓名',
      is: 'HorField',
      props: {
        maxlength: 11,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入姓名' }],
    },
    gender: {
      value: '',
      label: '性别',
      is: 'HorRadio',
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
      ],
      props: {},
      rules: [{ required: true, message: '请选择性别' }],
    },
    phone: {
      value: '',
      label: '电话',
      is: 'HorField',
      props: {
        maxlength: 8,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入手电话号码' }],
    },
    mobile: {
      value: '',
      label: '手机',
      is: 'HorField',
      props: {
        maxlength: 11,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入手机号' }],
    },
    address: {
      value: '',
      label: '地址',
      is: 'HorField',
      props: {
        maxlength: 30,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入地址' }],
    },
    noticeMethod: {
      value: [],
      label: '审批通知',
      is: 'HorCheckbox',
      options: NOTICE_METHOD,
      props: {},
      set: (s, f) => {
        const { noticeMethod } = s
        const res: any[] = []
        NOTICE_METHOD.forEach((item) => {
          console.log(noticeMethod, item.value)
          if (noticeMethod.includes(item.value)) {
            res.push(item.value)
          }
        })
        console.log(res)
        f.value = res
      },
      rules: [{ required: true, message: '请选择性别' }],
    },
    email: {
      value: '',
      label: '邮箱',
      is: 'HorField',
      props: {
        maxlength: 30,
        placeholder: '请输入',
      },
      rules: [
        {
          validator: (val) => {
            return !!isEmail(val)
          },
          message: '请输入正确的邮箱',
        },
      ],
    },
    depName: {
      value: '',
      label: '部门',
      is: 'HorField',
      props: {
        maxlength: 20,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入部门' }],
    },
    jobTitle: {
      value: '',
      label: '职位',
      is: 'HorField',
      props: {
        maxlength: 20,
        placeholder: '请输入',
      },
      rules: [{ required: true, message: '请输入职位' }],
    },
  })

  banana.assignment(userinfo?.content!, metadata)

  const handleSubmit = async () => {
    const options = await banana.validate(metadata)
    console.log('options', options)
  }
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
