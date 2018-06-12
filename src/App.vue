<template>
  <div id="app">
    <Navheader/>
       <router-view></router-view>
    <Navfooter/>
  </div>
</template>

<script>
import Navfooter from '@/page/Navfooter.vue'
import Navheader from '@/page/Navheader.vue'
import Home from '@/page/Home.vue'
export default {
name: 'App',
  components: {
    Navfooter,
    Navheader,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  *{padding: 0;margin: 0}
</style>
