<template>
  <div class="">
    <button @click="handleValidate">handleValidate</button>
  </div>
</template>

<script setup lang="ts">
  import type { Field } from '@pkstar/banana'
  import banana from '@pkstar/banana'
  import { o2a } from '@pkstar/utils'

  const obj: Record<string, Field> = {
    a1: {
      is: 'el-input',
      label: '姓名',
      value: '',
      set(s: any, f: any) {
        console.log(s, f)
        f.value = s.a1 + s.a2
      },
      get(s: any, f: any) {
        return {
          a: '提取的值',
        }
      },
      rules: [{ required: true }],
    },
  }
  // const arr = o2a(obj)
  const arr = [
    {
      is: 'el-input',
      value: '',
      set(s: any, f: any) {
        console.log(s, f)
        f.value = s.a1 + s.a2
      },
      get(s: any, f: any) {
        return {
          a: 'arr提取的值',
        }
      },
      rules: [
        {
          required: true,
          message: `不能为空`,
        },
      ],
    },
  ]

  //赋值
  // banana.assignment({ a1: 111, a2: 22233 }, obj)
  // console.log('obj=>', obj)

  // banana.assignment({ a1: 111, a2: 22233 }, arr)
  // console.log('arr=>', arr)

  //取值
  const b = banana.extract(arr)
  console.log(b)

  const handleValidate = () => {
    try {
      banana.validate(obj)
      // const res = banana.validate(arr)
      // console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<style lang="scss" scoped></style>
