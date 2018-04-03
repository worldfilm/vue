<template>
<div class="body">
  <h2>detail</h2>
  <p>
    <router-link to="">默认直接进这</router-link>
  </p>
  <p>
    <router-link to="detail">page里的detail</router-link>
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
export default {
  components: {}
}
</script>
<style lang="scss" scoped>
.body {
    margin-top: 2rem;
}
</style>
