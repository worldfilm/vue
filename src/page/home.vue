<template>
	<div class="home">
       <Slider/>
<<<<<<< HEAD
      	 <marquee/> 
      	 <TopBars/>
      	 <RecommendLottery/>
=======
       <MarqueeHelper/>	  
       <Topbars/>	  
>>>>>>> 8b7a138a795903f6f6c41a243443479fd4a1afe4
	</div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import Collapse from '@/components/Collapse.vue';
<<<<<<< HEAD
import marquee from '@/components/marquee.vue';
import TopBars from '@/components/TopBars.vue';
import RecommendLottery from '@/components/RecommendLottery.vue';
=======
import MarqueeHelper from '@/components/MarqueeHelper.vue';
import Topbars from '@/components/Topbars.vue'
>>>>>>> 8b7a138a795903f6f6c41a243443479fd4a1afe4
export default {
	data(){
		return {title:'home'}
	},
	name:'home',
  components: {
<<<<<<< HEAD
    Slider,Collapse,marquee,TopBars,RecommendLottery
=======
    Slider,Collapse,MarqueeHelper,Topbars
>>>>>>> 8b7a138a795903f6f6c41a243443479fd4a1afe4
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
