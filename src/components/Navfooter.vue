<template>
  <div class="footer">
    <p>
    	<ul>
    		<li @click="home"><img :src="foot_home"/><span>首页</span></li>
    		<li @click="open"><img :src="foot_open"/><span>游戏</span></li>
    		<li @click="recharge"><img :src="foot_recharge"/><span>充值</span></li>
    		<li @click="user"><img :src="foot_user"/><span>我的</span></li>
    	</ul>
    </p>
  </div>
</template>
<script>
  import Hub from '@/components/Hub'; //创建事件中心
	export default{
		name:'Navfooter',
    data(){
        return {
             foot_home:'../../static/jinjue_home_select.png',
             foot_open:'../../static/jinjue_open_unselect.png',
             foot_recharge:'../../static/jin_juerecharge_unselect.png',
             foot_user:'../../static/jinjue_my_unselect.png',
             UserName:'guo'
        }
    },
		components:{

		},
		methods:{
			home(){
			  this.$router.push({path:'/Home'})
			   Hub.$emit('change','首页'); //Hub触发事件
         this.foot_home='../../static/jinjue_home_select.png'
         this.foot_open='../../static/jinjue_open_unselect.png'
         this.foot_recharge='../../static/jin_juerecharge_unselect.png'
         this.foot_user='../../static/jinjue_my_unselect.png'
			},
			open(){
				this.$router.push({path:'/Open'})
				 Hub.$emit('change','游戏'); //Hub触发事件
         this.foot_home='../../static/jinjue_home_unselect.png'
         this.foot_open='../../static/jinjue_open_select.png'
         this.foot_recharge='../../static/jin_juerecharge_unselect.png'
         this.foot_user='../../static/jinjue_my_unselect.png'
			},
			recharge(){
				this.$router.push({path:'/Recharge'})
				 Hub.$emit('change','存款'); //Hub触发事件
         this.foot_recharge='../../static/jin_juerecharge_select.png'
         this.foot_home='../../static/jinjue_home_unselect.png'
         this.foot_open='../../static/jinjue_open_unselect.png'
         this.foot_user='../../static/jinjue_my_unselect.png'
			},
			user(){
         console.log(this.UserName)
				 this.user?(this.$router.push({path:'/logoin'})):(this.$router.push({path:'/User'}))
				 Hub.$emit('change','个人中心'); //Hub触发事件
         this.foot_user='../../static/jinjue_my_select.png'
         this.foot_home='../../static/jinjue_home_unselect.png'
         this.foot_open='../../static/jinjue_open_unselect.png'
         this.foot_recharge='../../static/jin_juerecharge_unselect.png'
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
