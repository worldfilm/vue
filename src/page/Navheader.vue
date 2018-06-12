<template>
	<div class='header'>
	  <p>
	  	<ul>
	  		<li class="left" @click="left"></li>
	  		<li class="middle" @click="middle">Navheader头部</li>
	  		<li class="right" @click="right"></li>
	  	</ul>
	  </p>
	</div>
</template>
<script type="text/javascript">
	export default{
		components:{
				
			},
		methods:{
			left(){
				fetch('http://play.qqmao.cn/x/',{xx:'xx'},'POST')
				console.log('left')
			},
			middle(){
				fetch('http://play.qqmao.cn/x/',
				{
					header:{method: "default_index", device: "MobileWeb"},
				    data:{flag: "init", platform: "xingyunno1cp"}
				},
				'POST').then(
					response => response.json
				).then(
					data => console.log(data)
					).catch(
						e => console.log("Oops, error", e)
						)
				console.log('middle')
			},
			right(){
				fetch('/v3/profile/explain');
				console.log('right')
			}
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
    p{
    	ul{
    		li{
    			display: inline-block;
		        float: left;
		        width: 33%;
		        height: 1rem;
    		}
    	}
    }
}
</style>
