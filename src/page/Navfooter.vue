<template>
  <div class="footer">
    <p>
    	<ul>
    		<li @click="home"><img src="../images/jinjue_home_select.png"/><span>首页</span></li>
    		<li @click="open"><img src="../images/jinjue_open_unselect.png"/><span>开奖</span></li>
    		<li @click="recharge"><img src="../images/jin_juerecharge_unselect.png"/><span>充值</span></li>
    		<li @click="user"><img src="../images/jinjue_my_unselect.png"/><span>我的</span></li>
    	</ul>
    </p>
  </div>
</template>
<script>
	export default{
		components:{
			
		},
		methods:{
			home(){
			  this.$router.push({path:'/Home'})
			},
			open(){

				this.$router.push({path:'/Open'})
			},
			recharge(){

				this.$router.push({path:'/Recharge'})
			},
			user(){

				this.$router.push({path:'/User'})
			}
		}
		
	}
</script>
<style lang="scss" scoped>
 .footer{
   position: fixed;
    display: block;
    width: 100%;
    height: 1.5rem;
    color: #000;
    background: #EEEEEE;
    line-height: 1.5rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    font-size: 0.4rem;
    ul{
    	li{
    		    display: inline-block;
				    width: 25%;
				    float: left;
				    img{
				    	width: 25px;
				    	height: 25px;
				    	position: relative;
					    left: 14px;
				    }
				    span{
				    	position: relative;
					    left: -14px;
					    top: 17px;
				    }
    	}
    }
 }
</style>
