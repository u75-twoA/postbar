<template>
	<view class="content">
		<view class="left">
			<view class="u-left">
				<view :style="select ? 'background-color: #F8F8FF;':'background-color: #fff;'">
					<view :class="select ? 'u-tz' : 'tz'" @click="tchange">
						<up-icon name="email" :size="select?'55':'45'"
							:color="select ? '#1E90FF' : '#778899'"></up-icon>
						<text>通知</text>
					</view>
				</view>
				<view :style="select ? 'background-color: #fff;':'background-color: #F8F8FF;'">
					<view :class="select ? 'lz' : 'u-lz'" @click="lchange">
						<up-icon name="chat" :size="select?'45':'55'" :color="select ? '#778899' : '#1E90FF'"></up-icon>
						<text>聊天</text>
					</view>
				</view>
			</view>
		</view>
		<view class="u-right" v-show="select">
			<view class="top">
				通知
			</view>
			<view class="t-list">
				<view class="t-il">
					<view class="t-content">
						<image src="../../static/image/xitong.png" mode="aspectFit"></image>
						<view class="u-li">
							<text style="font-size: 30rpx;">系统通知</text>
							<text class="t-con">暂无更多通知</text>
						</view>
					</view>
					<up-icon name="arrow-right" size="18"></up-icon>
				</view>
				<view class="t-il">
					<view class="t-content">
						<image src="../../static/image/dianzan.png" mode="aspectFit"></image>
						<view class="u-li">
							<text style="font-size: 30rpx;">点赞</text>
							<text class="t-con">无敌暴龙神赞了你的帖子</text>
						</view>
					</view>
					<up-icon name="arrow-right" size="18" @click="golove()"></up-icon>
				</view>

				<view class="t-il">
					<view class="t-content">
						<image src="../../static/image/huifu.png" mode="aspectFit"></image>
						<view class="u-li">
							<text style="font-size: 30rpx;">回复</text>
							<text class="t-con">无敌暴龙神评论了你的帖子</text>
						</view>
					</view>
					<up-icon name="arrow-right" size="18" @click="goreply()"></up-icon>
				</view>

				<view class="t-il">
					<view class="t-content">
						<image src="../../static/image/fans.png" mode="aspectFit"></image>
						<view class="u-li">
							<text style="font-size: 30rpx;">粉丝</text>
							<text class="t-con">无敌暴龙神关注了你</text>
						</view>
					</view>
					<up-icon name="arrow-right" size="18"></up-icon>
				</view>
			</view>
		</view>


		<view class="u-right" v-show="!select">
			<view class="top">
				<view>
					聊天
				</view>
				<view class="top-r">
					<up-icon name="chat" size="28"></up-icon>
					<text>发私信</text>
				</view>
			</view>
			<view class="t-list">
				<view class="t-il" v-for="(item,index) in list" :key="index">
					<view class="t-content">
						<image src="../../static/image/user-l.png" mode="aspectFit"></image>
						<view class="u-li">
							<text style="font-size: 30rpx;">{{item.name}}</text>
							<text class="t-con">{{item.category}}</text>
						</view>
					</view>
					<view class="t-ri">
						{{item.date}}
					</view>
				</view>



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
		chat
	} from '../../aip/api.js'

	onLoad(() => {
		chat().then(res => {
			list.value = res
		})
	})

	const list = ref([])
	const select = ref(true)

	const tchange = () => {
		select.value = true
	}
	const lchange = () => {
		select.value = false
	}
	//跳转到点赞页面
	const golove = () => {
		uni.navigateTo({
			url: '/pages/love/love'
		})
	}

	const goreply = () => {
		uni.navigateTo({
			url: '/pages/mail/reply/reply'
		})
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		background-color: #fff;

		.left {
			width: 15%;
			height: 100vh;
			background-color: #F8F8FF;
			display: flex;
			flex-direction: column;
			align-items: center;

			.u-left {
				width: 100%;

				.tz {
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #F8F8FF;
					border-radius: 0 0 50rpx 0;
					width: 100%;


					text {
						position: relative;
						font-size: 20rpx;
						top: -10rpx;
					}
				}

				.u-tz {
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #fff;
					border-radius: 50rpx 0 0 50rpx;
					width: 100%;



					text {
						position: relative;
						font-size: 30rpx;
						top: -10rpx;
						display: none;
					}
				}

				.lz {
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #F8F8FF;
					border-radius: 0 50rpx 0 0;
					width: 100%;

					text {
						position: relative;
						font-size: 20rpx;
						top: -10rpx;

					}
				}

				.u-lz {
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #fff;
					border-radius: 50rpx 0 0 50rpx;
					width: 100%;

					text {
						position: relative;
						font-size: 20rpx;
						top: -10rpx;
						display: none;
					}
				}
			}
		}


		.u-right {
			width: 78%;

			.top {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-weight: bold;
				font-size: 40rpx;
				margin-left: 40rpx;
				margin-top: 40rpx;
				width: 100%;
				margin-bottom: 40rpx;


				.top-r {
					font-weight: normal;
					display: flex;
					align-items: center;

					text {
						margin-left: 10rpx;
						font-size: 22rpx;
					}
				}


			}

			.t-list {
				margin-left: 40rpx;

				.t-il {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 25rpx;
					position: relative;

					.t-content {
						display: flex;
						align-items: center;

						image {
							width: 50rpx;
							height: 50rpx;
							margin-right: 20rpx;
						}

						.u-li {
							display: flex;
							flex-direction: column;


							.t-con {
								font-size: 20rpx;
								color: #696969;
							}
						}
					}

					.t-ri {
						position: absolute;
						top: 5rpx;
						right: 0;
						font-size: 20rpx;
						color: #696969;
					}
				}
			}
		}
	}
</style>