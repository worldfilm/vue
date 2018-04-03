<template>
  <div id="app">
    <Navheader/>
    <router-view/>
    <Navfooter/>
  </div>
</template>

<script>
import Navfooter from '@/page/Navfooter.vue'
import Navheader from '@/page/Navheader.vue'

export default {
name: 'App',
  components: {
    Navfooter,
    Navheader
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
  height: 18rem;

}
  *{padding: 0;margin: 0}
</style>
