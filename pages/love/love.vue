<template>
	<view class="content">
		<view class="post" v-for="(item ,index) in list" :key="index">
			<view class="top">
				<image :src="item.avata"></image>
				<view class="top-r">
					<text style="margin-bottom: 10rpx;">{{item.name}}</text>
					<text style="font-size: 20rpx;color: #696969;">{{item.date}}</text>
				</view>
			</view>
			<view>
				赞了你的帖子
			</view>
			<view class="p-content">
				<image src="/static/image/tao.png"></image>
				<text>{{item.title}}</text>
			</view>
			<view class="button">
				我的贴吧
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from "vue"
	import {
		love
	} from "../../aip/api.js"
	import {
		onLoad
	} from '@dcloudio/uni-app'
	const list = ref([])
	onLoad(() => {
		love().then(res => {
			list.value = res
			console.log(list.value)
		})

	})
</script>

<style lang="scss">
	.content {
		height: 100vh;
		background-color: #F5F5F5;

		.post {
			background-color: #fff;
			padding: 30rpx;
			margin-bottom: 10rpx;

			.top {
				display: flex;
				align-items: center;
				margin-bottom: 15rpx;

				image {
					height: 80rpx;
					width: 80rpx;
					border-radius: 50%;
					margin-right: 15rpx;
				}

				.top-r {
					display: flex;
					flex-direction: column;
				}
			}

			.p-content {
				display: flex;
				align-items: center;
				background-color: #F5F5F5;
				border-radius: 20rpx;
				margin-top: 10rpx;
				margin-bottom: 15rpx;

				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 20rpx;
					margin-right: 15rpx;
				}
			}

			.button {
				font-size: 25rpx;
				color: #696969;
			}
		}
	}
</style>