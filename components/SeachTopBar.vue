<template>
	<view>
		<u-navbar :is-back="back" :background="background">
			<view class="slot-warp">
				<view v-if="seach" class="seachBar" @click="seachhander"><u-search placeholder="搜索商品" disabled="false" :show-action="false" height="60"></u-search></view>
			</view>
		</u-navbar>
	</view>
</template>

<script>
export default {
	name: 'seachTopBar',
	props: {
		seach: {
			type: Boolean,
			default: false
		},
		back: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			background: {
				backgroundColor: '#eb4450'
			}
		};
	},
	mounted() {
		console.log(this.seach);
	},
	methods: {
		seachhander() {
			uni.navigateTo({
				url: '/pages/search/index'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.slot-warp {
	display: flex;
	width: 100%;
	height: 70rpx;
	align-items: flex-start;
	/* #ifdef H5 */
	align-items: center;
	/* #endif */
	justify-content: flex-start;
	margin-left: 20rpx;
	color: #ffffff;
}
</style>
