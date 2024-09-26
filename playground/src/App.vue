<template>
  <div class="main">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about?aa=11">About</RouterLink>
          <RouterLink to="/banana">banana</RouterLink>
          <RouterLink to="/utils">utils</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
  .main {
    padding: 10px;
  }
</style>
