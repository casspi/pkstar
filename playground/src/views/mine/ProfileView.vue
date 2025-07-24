<template>
  <HorView class="profile-view">
    <ProSchemaRender :fields="fields" :source="userinfo?.content" shwoEmptyField> </ProSchemaRender>
  </HorView>
</template>

<script setup lang="ts">
  import { useProSchemaRender } from '@/components'
  import { useUserinfoStore } from '@/stores'
  const { userinfo } = useUserinfoStore()

  const fields = useProSchemaRender([
    {
      is: 'HorCellGroup',
      children: [
        {
          is: 'HorCell',
          label: '姓名',
          key: 'realName',
        },
        {
          is: 'HorCell',
          label: '性别',
          key: 'gender',
        },
        {
          is: 'HorCell',
          label: '电话',
          key: 'phone',
        },
        {
          is: 'HorCell',
          label: '手机',
          key: 'mobile',
        },
        {
          is: 'HorCell',
          label: '地址',
          key: 'address',
        },
        {
          is: 'HorCell',
          label: '审批通知',
          key: 'noticeMethod',
        },
      ],
    },
    {
      is: 'HorCellGroup',
      children: [
        {
          is: 'HorCell',
          label: '邮箱',
          key: 'email',
        },
        {
          is: 'HorCell',
          label: '部门',
          key: 'depName',
        },
        {
          is: 'HorCell',
          label: '职位',
          key: 'jobTitle',
        },
      ],
    },
    {
      is: 'HorCellGroup',
      children: [
        {
          is: 'HorCell',
          label: 'JD信息',
          value: '请在后台维护',
        },
        {
          is: 'HorCell',
          label: 'CV信息',
          value: '请在后台维护',
        },
        {
          is: 'HorCell',
          label: '经验表格',
          value: '请在后台维护',
        },
      ],
    },
  ])
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
</style>
