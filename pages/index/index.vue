<template>
	<view class="content">
		<SeachTopBar :seach="true"></SeachTopBar>
		<u-swiper class="index_swiper" :list="swiperList" name="image_src" height="340"></u-swiper>
		<view class="index_card">
			<navigator v-for="(item, index) in cardList" :key="index"><image mode="widthFix" :src="item.image_src" /></navigator>
		</view>
		<view class="index_floor">
			<view class="floor_group" v-for="(item1, index1) in floorList" :key="index1">
				<view class="floor_title"><image mode="widthFix" :src="item1.floor_title.image_src" /></view>
				<view class="floor_list">
					<navigator v-for="(item2, index2) in item1.product_list" :key="index2">
						<image :mode="index2 === 0 ? 'widthFix' : 'scaleToFill'" :src="item2.image_src" />
					</navigator>
				</view>
			</view>
		</view>
		<TabBar></TabBar>
	</view>
</template>

<script>
import TabBar from '@/components/TabBar.vue';
import SeachTopBar from '@/components/SeachTopBar.vue';
import { getswpierdataApi, getcarddataApi, getfloordataApi } from '@/api/goods.js';
export default {
	components: {
		TabBar,
		SeachTopBar
	},
	data() {
		return {
			swiperList: [],
			cardList: [],
			floorList: []
		};
	},
	mounted() {
		this.getswpierdata();
		this.getcarddata();
		this.getfloordata();
	},
	methods: {
		async getswpierdata() {
			const { data } = await getswpierdataApi();
			this.swiperList = data.message;
		},
		async getcarddata() {
			const { data } = await getcarddataApi();
			this.cardList = data.message;
		},
		async getfloordata() {
			const { data } = await getfloordataApi();
			this.floorList = data.message;
		}
	}
};
</script>

<style scoped lang="scss">
.index_swiper {
	width: 750rpx;
}
.index_card {
	display: flex;
	padding: 20rpx;

	navigator {
		display: flex;
		flex: 1;
		justify-content: center;

		image {
			width: 80%;
		}
	}
}
.index_floor {
	.floor_group {
		.floor_title {
			padding: 10rpx 0;

			image {
				width: 100%;
			}
		}

		.floor_list {
			overflow: hidden;
			navigator {
				float: left;
				width: 33%;

				&:nth-last-child(-n + 4) {
					height: 33.33vw * 386/232/2;
					border-left: 10rpx solid #ffffff;
					box-sizing: border-box;
				}

				&:nth-child(2) {
					border-bottom: 10rpx solid #ffffff;
				}
				&:nth-child(3) {
					border-bottom: 10rpx solid #ffffff;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
