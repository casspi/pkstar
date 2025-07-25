<template>
  <ProImg :def-src="defSrc" :src="src" alt="avatar" />
</template>

<script setup lang="ts">
  import defSrc from '@/assets/img/default_user.png'

  defineProps({
    src: {
      type: String,
      default: '',
    },
  })
</script>
