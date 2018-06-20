<template>
  <div id="app">
    <Navheader/>
       <router-view></router-view>
    <Navfooter/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Navfooter from '@/components/Navfooter.vue'
import Navheader from '@/components/Navheader.vue'
=======
import Navfooter from '@/page/Navfooter.vue'
import Navheader from '@/page/Navheader.vue'
>>>>>>> 8b7a138a795903f6f6c41a243443479fd4a1afe4
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
