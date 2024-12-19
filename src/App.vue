<script setup lang="ts">
import HomeView from './views/Home.vue';
</script>

<template>
  <div id="app" role="main" aria-label="Main Content">
    <HomeView />
  </div>
</template>

<style> 
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden; 
  font-family: 'Geist', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
