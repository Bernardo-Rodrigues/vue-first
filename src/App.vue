<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 100vh;
  width: 100vw;
}
</style>
