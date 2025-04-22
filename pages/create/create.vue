<template>
	<view class="content">
		<view class="top">
			<up-icon name="close" size="25" color="#000"></up-icon>
			<text>帖子</text>
			<view class="">
				<image src="/static/image/collect.png"></image>
			</view>
		</view>
		<view class="u-content">
			<view class="u-title">
				<u-input placeholder="请输入标题" border="surround" clearable></u-input>
			</view>
			<u-textarea placeholder="请输入内容" style="height: 400rpx; margin-bottom: 20rpx;"></u-textarea>
			<u-divider></u-divider>

			<view class="change">
				<view class="c-left">
					<image src="/static/image/icon.png" style="height: 40rpx;width: 40rpx; margin-right: 10rpx;">
					</image>
					<text>选择的吧</text>
				</view>
				<view class="flex-box" @click="close">
					<text class="u-text">选择适合的吧会有更多的点赞哦</text>
					<up-icon name="arrow-right" size="13"></up-icon>
				</view>
			</view>

		</view>
	</view>
	<up-popup :show="show" @close="close">
		<view class="popup">
			<view class="p-top">
				<up-icon name="close" size="18" color="#000"></up-icon>
				<text style="font-weight: bold;">请选择吧</text>
				<view></view>
			</view>
			<view class="p-content">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
					activeColor="#4cd964"></uni-segmented-control>
				<view class="content">
					<view v-show="current === 0">
						<u-list>
							<u-list-item v-for="(item ,index) in list " :key="index" style="margin-bottom: 20rpx;">
								<view class="u-cell">
									<image :src="item.avatar"></image>
									<view class="u-right">
										<text>{{item.name}}</text>
										<uni-tag text="item" :inverted="true" size="mini" circle="true"
											type="primary" />
									</view>
								</view>
							</u-list-item>
						</u-list>
					</view>
					<view v-show="current === 1">
						<u-list>
							<u-list-item v-for="(item ,index) in list " :key="index" style="margin-bottom: 20rpx;">
								<view class="u-cell">
									<image :src="item.avatar"></image>
									<text>{{item.name}}</text>
									<uni-tag text="item" :inverted="true" size="mini" circle="true" type="primary" />
								</view>
							</u-list-item>
						</u-list>
					</view>
				</view>
			</view>
		</view>
	</up-popup>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		notice
	} from '../../aip/api.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const show = ref(false)
	const close = () => {
		show.value = !show.value
	}
	const items = ['我的关注', '最近浏览']
	const current = ref(0)
	const list = ref([])

	onLoad(() => {
		notice().then(res => {
			list.value = res
			console.log(list.value)
		})
	})
	const onClickItem = (e) => {
		if (current.value != e.currentIndex) {
			current.value = e.currentIndex
		}
	}
</script>

<style lang='scss'>
	.flex-box {
		display: flex;
		align-items: center;
	}

	.content {
		padding: 20rpx 20rpx;

		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 40rpx;

			text {
				font-size: 35rpx;
				font-weight: bold;
			}

			image {
				height: 60rpx;
				width: 60rpx;
				padding-right: 20rpx;
			}
		}

		.u-content {
			.u-title {
				margin-bottom: 30rpx;
			}

			.change {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.c-left {
					display: flex;
					align-items: center;
				}

				.u-text {
					font-size: 22rpx;
					color: #A2A1A2;
					margin-right: 5rpx;
				}
			}
		}
	}

	.popup {
		height: 700rpx;
		padding: 20rpx 20rpx;

		.p-top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 10rpx;
		}

		.p-content {
			.u-cell {
				display: flex;
				align-items: center;

				image {
					height: 75rpx;
					width: 75rpx;
					border-radius: 30%;
					margin-right: 15rpx;
				}

				.u-right {
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
</style>