<script setup lang="ts">
  import { useToggle } from '@pkstar/vue-use'
  const [flag, toggle] = useToggle()
</script>

<template>
  <main>
    <button @click="toggle(!flag)">Toggle</button>
    <p v-if="flag">Flag is true</p>
    <p v-else>Flag is false</p>
    <RouterLink to="/about/home-page">Go to About</RouterLink>
  </main>
</template>
