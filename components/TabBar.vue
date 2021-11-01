<template>
	<view><u-tabbar :list="tabbar" v-model="current" active-color="#ff2d4a"></u-tabbar></view>
</template>

<script>
export default {
	name: 'TabBar',
	data() {
		return {
			current: 0,
			tabbar: [
				{
					iconPath: 'home',
					selectedIconPath: 'home-fill',
					pagePath: '/pages/index/index',
					text: '首页'
				},
				{
					iconPath: 'grid',
					selectedIconPath: 'grid-fill',
					pagePath: '/pages/category/index',
					text: '分类'
				},
				{
					iconPath: 'shopping-cart',
					selectedIconPath: 'shopping-cart-fill',
					pagePath: '/pages/cart/index',
					text: '购物车'
				},
				{
					iconPath: 'account',
					selectedIconPath: 'account-fill',
					pagePath: '/pages/user/index',
					text: '我的'
				}
			]
		};
	}
};
</script>

<style lang="scss"></style>
