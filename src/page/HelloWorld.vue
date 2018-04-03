<template>
<div class="body">
  <Slider/>
  <Collapse/>
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <p>
    <router-link to="">默认直接进这</router-link>
  </p>
  <p>
    <router-link to="detail">detail</router-link>
  </p>
  <p>
    <router-link to="home">page里的home页面</router-link>
  </p>
  <p>
    <router-link to="logoin">page里的logoin页面</router-link>
  </p>
  <p>
    <router-link to="logoOut">page里的logoOut页面</router-link>
  </p>
  <p>
    <router-link to="HelloWorld">page里的HelloWorld页面</router-link>
  </p>
</div> 
</template>

<script>
import Slider from '@/components/Slider.vue'
import Collapse from '@/components/Collapse.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'page里的HelloWorld页面'
    }
  },
  components: {
    Slider,
    Collapse
  }
}
</script>

<style lang="scss" scoped>
.body {
    margin-top: 2rem;
}
</style>
