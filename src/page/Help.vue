<template>
	<div class="help">
       <Collapse/>	  	  
	</div>
</template>

<script>

	import Collapse from '@/components/Collapse.vue';
	export default {
	  components: {
	    Collapse
	  }
	}
</script>

<style lang="scss" scoped>
.help{
	top: 1rem;
	position: relative;
    left: 0;
    height: auto;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>