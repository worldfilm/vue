<template>
	<div class="home">
       <Slider/>
      	 <marquee/>
      	 <RecommendLottery/>
       <Topbars/>
	</div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import Collapse from '@/components/Collapse.vue';
import marquee from '@/components/marquee.vue';
import RecommendLottery from '@/components/RecommendLottery.vue';
import Topbars from '@/components/Topbars.vue'

export default {
	data(){
		return {title:'home'}
	},
	name:'home',
  components: {
    Slider,Collapse,marquee,Topbars,RecommendLottery
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
