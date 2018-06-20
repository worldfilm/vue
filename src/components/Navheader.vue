<template>
	<div class='header'>
	  <p>
			<ul>
		    	<li class="back" @click="left_fun"></li>
		    	<li class="title">{{this.title}}</li>
			    <li class="closed" @click="right_fun"></li>
			</ul>
	  </p>
	</div>
</template>
<script>
	import Hub from '@/components/Hub';
	export default {
		name:'Navheader',
	    components: {
	    },
	    data(){
	    	return {
	    		title:'首页'
	    	}
	    },
		methods:{
		   left_fun(){
        console.log('left')
			 },
			right_fun() {
        console.log('right')
			}
		},
		props:[],
		created(){
		    Hub.$on('change', (data) => { //Hub接收事件
		       this.title=data
		    });
		}
	}
</script>
<style lang="scss" scoped>
.header {
    color: #fff;
    background: #ef0a1e;
    line-height: 1rem;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 1rem;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 0.5rem;
		ul{
		  li{
				display: inline-block;
				float: left;
				width:33.3%;
				height:1rem;
			}
			.closed{
				width: 25%;
			}
			.back{
				width: 25%;
			}
			.title{
				width: 50%;
			}
		}
}
</style>
