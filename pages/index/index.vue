<template>
	<view class="content">
		<view class="u-flex">
			<up-avatar style="padding: 10rpx;" :src="src"></up-avatar>
			<up-search placeholder="搜索吧/帖子" v-model="keyword" shape="round" clearabled :actionStyle="buttonStyle"
				@custom="search" bgColor="#FFF"></up-search>
		</view>
		<view class="up-scroll-container">
			<view class="u-container">
				<view style="display: flex;
			align-items: center;">
					<up-icon name="bookmark" size="30" color="#696969"></up-icon>
					<text>猜你喜欢:</text>
				</view>
				<view class="left-buttom">
					<text>全部</text>
					<up-icon name="arrow-right" size="15"></up-icon>
				</view>
			</view>
			<!-- 滚动部分 -->
			<up-scroll-list class="demo-scrpll">
				<view>
					<view v-for="(item, index) in list" class="scroll-container" :key="index">
						<view v-for="(item1, index1) in item" :key="index1" class="item-container">
							<image :src="item1.image"></image>
							<text>{{ item1.name }}</text>
						</view>
					</view>
				</view>
			</up-scroll-list>
		</view>
		<view v-for="(item ,index) in cardList" :key="index" class="card">
			<view class="top">
				<view class="r-top">
					<image :src="item.avatar"></image>
					<view class="r-top-1">
						<view class="r-top-2">
							<text>{{item.name}}</text>
							<image src="../../static/image/post.png"></image>
						</view>
						<text>关注 {{item.tag1}} 帖子 {{item.tag2}}</text>
					</view>
				</view>
				<view :class="item.is_p ? 'not-attention':'is-attention'" @click="change(item)">
					{{item.is_p ? '已关注': '+关注'}}
				</view>
			</view>



			<view class="title">
				{{item.title}}
			</view>
			<view class="describe">
				{{item.content}}
			</view>
			<image :src="item.image"></image>
			<view class="button">
				<view class="b-button">
					<up-icon name="share-square" size="20"></up-icon>
					<text>{{item.shares}}</text>
				</view>
				<view class="b-button">
					<up-icon name="chat" size="20"></up-icon>
					<text>{{item.comments}}</text>
				</view>
				<view class="b-button">
					<up-icon name="thumb-up" size="20"></up-icon>
					<text>{{item.likes}}</text>
				</view>
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
		apiSendpost,
		apiCard,
		test
	} from "../../aip/api.js"
	import {
		onLoad
	} from '@dcloudio/uni-app'


	//****************************************
	const keyword = ref('')
	const buttonStyle = {
		color: 'white',
		backgroundColor: '#00aaff',
		padding: '5px 10px',
		borderRadius: '5px',
		border: 'none',
	}
	const src = ''
	//滚动数据
	const list = ref([])
	//card数据

	const cardList = ref([])
	onLoad(() => {
		apiSendpost().then(res => {
			list.value = res
		})

		//
		apiCard().then(res => {
			cardList.value = res
		})

		//*******************test**************************
		// test(buttonStyle).then(res => {
		// 	console.log(res, "dadafsssssssssssss")
		// 	const {
		// 		token
		// 	} = res.data
		// 	console.log(token, 'token')
		// 	uni.setStorageSync('token', token)
		// })

		//*******************test**************************
	})

	const search = () => {

	}
	const change = (item) => {
		item.is_p = !item.is_p
	}
</script>

<style lang='scss'>
	.content {
		background-color: #F0F0F0;
		padding: 20rpx 20rpx;
	}

	.flexBox {
		display: flex;
		align-items: center;
	}

	.u-flex {
		margin-bottom: 15rpx;
	}

	.up-scroll-container {
		background-color: #fff;
		padding: 10rpx;
		border-radius: 25rpx;

		.demo-scrpll {

			.scroll-container {
				display: flex;
				margin-bottom: 15rpx;

				.item-container {
					margin-left: 6rpx;
					margin-right: 40rpx;
					display: flex;
					flex-direction: column;
					align-items: center;

					image {
						height: 100rpx;
						width: 100rpx;
						border-radius: 30%;
						margin-bottom: 5rpx;
					}

					text {
						width: 100rpx;
						/* 设置容器宽度 */
						white-space: nowrap;
						/* 防止文本换行 */
						overflow: hidden;
						/* 隐藏溢出的文本 */
						text-overflow: ellipsis;
						/* 使用省略号表示溢出的文本 */
						font-size: 20rpx;
					}
				}
			}
		}

		.u-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 10rpx;

			.left-buttom {
				display: flex;
				align-items: center;
			}
		}
	}


	.card {
		margin-top: 10rpx;
		border-radius: 20rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 20rpx;
		background-color: #fff;

		.top {

			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10rpx;




			.r-top {
				display: flex;
				align-items: center;

				image {
					height: 80rpx;
					width: 80rpx;
					border-radius: 30%;
				}

				.r-top-1 {
					display: flex;
					flex-direction: column;
					margin-left: 20rpx;

					.r-top-2 {
						display: flex;
						align-items: center;

						text {
							font-size: 35rpx;
							color: #000;
						}

						image {
							margin-left: 10rpx;
							height: 40rpx;
							width: 40rpx;
						}
					}

					text {
						font-size: 18rpx;
						color: #696969;
					}
				}
			}

			.not-attention {
				background-color: #d9e8fc;
				color: #237cf6;
				padding: 10rpx 20rpx 10rpx 20rpx;
				border-radius: 40rpx;
				font-size: 23rpx;
			}

			.is-attention {
				background-color: #F5F5F5;
				color: #DCDCDC;
				padding: 10rpx 20rpx 10rpx 20rpx;
				border-radius: 40rpx;
				font-size: 23rpx;
			}
		}

		.title {
			font-weight: bold;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
		}

		.describe {
			margin-bottom: 10rpx;
		}

		image {
			border-radius: 20rpx;
			margin-bottom: 10rpx;
		}

		.button {
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding-bottom: 20rpx;

			.b-button {
				display: flex;
				align-items: center;

				text {
					font-size: 18rpx;
					color: #696969;
				}
			}
		}
	}
</style>