<template>
	<view class="top">
		<up-icon name="arrow-left" size="20"></up-icon>
		<text>我的收藏</text>
		<up-icon name="more-dot-fill" size="30"></up-icon>
	</view>
	<view class="content">
		<view class="u-collect" v-for="(item ,index) in list" :key="index">
			<view class="u-content">
				<view class="u-left">
					<image :src="item.avatar"></image>
					<text>{{item.name}}</text>
				</view>
				<view :class="item.is_p? 'u-right-two':'u-right'" @click="oncollect(item)">
					{{item.is_p ? '已关注' :'关注'}}
				</view>
			</view>
			<view class="u-text">
				{{item.title}}
			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		collect,
		adminLike
		// test1
	} from '../../aip/api.js'
	const list = ref([])
	const focus = ref(false)

	onLoad(() => {
		// collect().then(res => {
		// 	list.value = res
		// })
		adminLike().then(res => {
			list.value = res
		})
		//*******************test**************************
		// const data = uni.getStorageSync('token')
		// console.log(data, 'token')
		// test1().then(res => {
		// 	console.log(res,
		// 		'*****************')
		// })
		//*******************test**************************
	})
	const oncollect = (item) => {
		item.is_p = !item.is_p

	}
</script>

<style lang='scss'>
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20rpx;
		padding-top: 20rpx;
		padding-right: 20rpx;
	}

	.content {
		padding: 20rpx 20rpx;
		background-color: #F8F8F8;
		height: 100%;
		margin-top: 20rpx;

		.u-collect {
			background-color: #fff;
			border-radius: 20rpx;
			padding-bottom: 15rpx;
			margin-top: 20rpx;
			padding-top: 15rpx;

			.u-content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				margin-bottom: 10rpx;

				.u-left {
					display: flex;
					align-items: center;
					margin-left: 20rpx;

					image {
						border-radius: 50%;
						width: 70rpx;
						height: 70rpx;
						margin-right: 15rpx;
					}

					text {
						font-size: 30rpx;
					}
				}

				.u-right {
					padding: 5px 10px;
					font-size: 12px;
					color: #4A90E2;
					background-color: #fff;
					border: 2px solid #4A90E2;
					border-radius: 5px;
					margin-right: 20rpx;
				}

				.u-right-two {
					padding: 5px 10px;
					font-size: 12px;
					color: #000;
					background-color: #fff;
					border-radius: 5px;
					margin-right: 20rpx;
				}
			}

			.u-text {
				margin-left: 20rpx;
			}
		}
	}
</style>