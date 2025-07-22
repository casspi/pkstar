<template>
  <ProImg :def-src="defSrc" :src="src" alt="avatar" />
</template>

<script setup lang="ts">
  import defSrc from './icon-def-avatar.png'

  defineProps({
    src: {
      type: String,
      default: '',
    },
  })
</script>
