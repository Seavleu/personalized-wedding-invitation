<script setup lang="ts">
import HomeView from './views/Home.vue';
</script>

<template>
  <div id="app" role="main" aria-label="Main Content">
    <HomeView />
  </div>
</template>

<style>  
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
