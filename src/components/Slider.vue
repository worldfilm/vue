<template>
	<div class="Slider">
	  <el-carousel :interval="5000" arrow="always">
<<<<<<< HEAD
	    <el-carousel-item v-for="item in list">
	      <img :src='item.src'/>
=======
	    <el-carousel-item v-for="item in 4" :key="item">
	      <h3>{{ item }}</h3>
>>>>>>> 8b7a138a795903f6f6c41a243443479fd4a1afe4
	    </el-carousel-item>
	  </el-carousel>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				list:[
				{
					src:'../../static/1.png'
				},{
					src:'../../static/2.jpg'
				},{
					src:'../../static/3.png'
				}		
				]
			}
		},
	  components: {
	  },
		methods:{
		   
		}
	}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item img {
  height: 150px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel__container{
	height: 150px;
}
   
</style>
