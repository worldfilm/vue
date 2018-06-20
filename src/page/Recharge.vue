<template>
	<div class="recharge">
		<p>RechargeRechargeRechargeRechargeRecharge</p>
		<Dropdown/>
	</div>
</template>

<script>
	import Dropdown from '@/components/Dropdown.vue';
	export default {
		components: {
			Dropdown
		}
	}
</script>

<style lang="scss" scoped>
.recharge{
	top: 1rem;
	position: relative;
    left: 0;
    height: auto;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
