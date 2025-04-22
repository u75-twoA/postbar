<template>
	<view class="z">
		<view class="t-content">
			<view class="top">
				<view class="l-top">
					<image src="../../static/image/user-u.png"></image>
					<view class="l-top-r">
						<text @click="setFun">困到迷糊</text>
						<view class="l-top-r-b">
							<text>关注 1</text>
							<text> 粉丝 1</text>
						</view>
					</view>
				</view>
				<view class="r-top">
					<image src="../../static/image/setting-1.png"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="top-1">
				<view class="postman">
					<view style="font-size: 45rpx; font-weight: bold;">
						2
					</view>
					<text style="font-size: 22rpx;">我的发帖</text>
				</view>
				<view class="postman">
					<view style="font-size: 45rpx; font-weight: bold;">
						3
					</view>
					<text style="font-size: 22rpx;">我的回帖</text>
				</view>
				<view class="postman">
					<view style="font-size: 45rpx; font-weight: bold;">
						4
					</view>
					<text style="font-size: 22rpx;">关注的吧</text>
				</view>
			</view>

			<view class="center">
				<view class="c-function">
					<view class="title">
						常用功能
					</view>
					<view class="b-function">
						<view class="d-functon">
							<image src="../../static/image/shouc.png"></image>
							<text style="font-size: 20rpx;">我的收藏</text>
						</view>
						<view class="d-functon">
							<image src="../../static/image/history.png"></image>
							<text style="font-size: 20rpx;">浏览历史</text>
						</view>
						<view class="d-functon">
							<image src="../../static/image/create.png"></image>
							<text style="font-size: 20rpx;">创建吧</text>
						</view>
					</view>
				</view>

				<up-cell-group :border="false">
					<up-cell icon="account" title="个人信息" :isLink="true"></up-cell>
					<up-cell icon="kefu-ermai" title="用户反馈" :isLink="true"></up-cell>
					<up-cell icon="email" title="我的邮件" :isLink="true"></up-cell>
					<up-cell icon="gift" title="分享有礼" :isLink="true" :border="false"></up-cell>
				</up-cell-group>
			</view>

		</view>
	</view>
</template>

<script setup>
	import {
		login
	} from '../../aip/api'

	const setFun = () => {
		uni.showModal({
			title: '温馨提示',
			content: '请授权微信登录后才能正常使用小程序',
			success(res) {
				if (res.confirm) {
					uni.login({
						success: (data) => {
							console.log(data)
							login(data).then((res) => {
								console.log(res)
							})
						}
					})

					// login.then((data) => {
					// 	console.log(data)
					// })
					// uni.getUserProfile({
					// 	desc: "获取用户头像和昵称",
					// 	success(res) {
					// 		console.log(res, 'success')
					// 	},
					// 	fail(err) {
					// 		console.log(err, 'fail')
					// 	}
					// })
				}
			},
			fail(err) {
				console.log(err, 'err')
			}
		})
	}
</script>

<style lang='scss'>
	.z {
		background-color: #F8F8FF;
		height: 100vh;

		.t-content {
			padding: 20rpx 20rpx;
			background-color: #F0FFFF;
			padding-bottom: 30rpx;
			border-radius: 0 0 30rpx 30rpx;

			.top {
				margin-top: 30rpx;
				margin-left: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.l-top {
					display: flex;
					align-items: center;

					image {
						height: 90rpx;
						width: 90rpx;
						margin-right: 30rpx;
					}

					.l-top-r {
						display: flex;
						flex-direction: column;

						text {
							font-weight: bold;
							margin-bottom: 2rpx;
						}

						.l-top-r-b {
							text {
								font-size: 18rpx;
								color: #696969;
								margin-right: 10rpx;
							}
						}
					}
				}

				.r-top {
					image {
						height: 50rpx;
						width: 50rpx;
						margin-right: 10rpx;
					}

				}
			}
		}

		.content {
			padding: 20rpx 20rpx;

			.top-1 {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-bottom: 40rpx;

				.postman {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}

			.center {
				border-radius: 40rpx;
				background-color: #fff;

				.c-function {
					margin-bottom: 30rpx;

					.title {
						font-weight: bold;
						margin-top: 20rpx;
						margin-left: 20rpx;
						margin-bottom: 20rpx;
					}

					.b-function {
						display: flex;
						align-items: center;
						justify-content: space-around;

						.d-functon {
							display: flex;
							flex-direction: column;
							align-items: center;

							image {
								height: 60rpx;
								width: 60rpx;
							}
						}
					}
				}


			}
		}
	}
</style>