<template>
  <div class="about">
    <h1>来自{{ $route.params.from }}</h1>
  </div>
</template>

<script lang="ts" setup>
  import { useParams, useQuery } from '@pkstar/vue-use'
  const { from } = useParams()
  const { aa } = useQuery()
  console.log('params=>', from)
  console.log('query=>', aa)
</script>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
