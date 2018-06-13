<template>
	<div class="home">
       <Slider/>
       <MarqueeHelper/>	  
       <Topbars/>	  
	</div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import Collapse from '@/components/Collapse.vue';
import MarqueeHelper from '@/components/MarqueeHelper.vue';
import Topbars from '@/components/Topbars.vue'
export default {
  components: {
    Slider,Collapse,MarqueeHelper,Topbars
  }
}
</script>

<style lang="scss" scoped>
.home{
	top: 1rem;
	position: relative;
    left: 0;
    height: auto;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
