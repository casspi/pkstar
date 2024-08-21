<template>
  <main>
    <button @click="toggle(!flag)">Toggle</button>
    <p v-if="flag">Flag is true</p>
    <p v-else>Flag is false</p>
    <RouterLink to="/about/home-page">Go to About</RouterLink>
  </main>
</template>

<script setup lang="ts">
  import { useToggle } from '@pkstar/vue-use'
  import { a2o } from '@pkstar/utils'

  const [flag, toggle] = useToggle()
  const arr = [
    { name: '小米', type: 1 },
    { name: '苹果', type: 2 },
    { name: '苹果os', type: 2 },
  ]
  const nameObj = a2o(arr, 'name')
  console.log('nameObj=>', nameObj)
  const typeObj = a2o(arr, 'type', 'name')
  console.log('typeObj=>', typeObj)
</script>
