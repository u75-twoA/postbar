<template>
	<view>
		<up-waterfall v-model="flowList">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<view class="image-container">
						<up-lazy-load threshold="-450" :image="item.image" :index="index"
							border-radius="10"></up-lazy-load>
						<view class="demo-content">
							{{item.description}}
						</view>

					</view>
					<view class="demo">
						<image :src="item.avatar" mode=""></image>
						<text>{{item.name}}</text>
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							{{item.tag1}}
						</view>
						<view class="demo-tag-text">
							{{item.tag2}}
						</view>
					</view>

				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
					<view class="image-container">
						<up-lazy-load threshold="-450" :image="item.image" :index="index" border-radius="10"
							class="image"></up-lazy-load>
						<view class="demo-content">
							{{item.description}}
						</view>
					</view>
					<view class="demo">
						<image :src="item.avatar" mode=""></image>
						<text>{{item.name}}</text>
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							{{item.tag1}}
						</view>
						<view class="demo-tag-text">
							{{item.tag2}}
						</view>
					</view>
				</view>
			</template>
		</up-waterfall>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from "vue"
	import {
		waterfall
	} from "../../aip/api.js"
	import {
		onLoad
	} from '@dcloudio/uni-app'

	//瀑布流数据
	const flowList = ref([])
	onLoad(() => {

		//获取瀑布流数据
		waterfall().then(res => {
			flowList.value = res
			console.log(flowList.value, 'flowList.value')
		})
	})
</script>

<style lang="scss">
	.demo-warter {
		margin: 10rpx 10rpx 10rpx 0;
		border-radius: 16rpx;
		padding: 16rpx;
		margin-bottom: 5rpx;


		.image-container {
			position: relative;

			.image {
				mim-height: 300rpx;
				max-height: 600rpx;
			}

			.demo-content {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				color: white;
				padding: 5px;
				box-sizing: border-box;
				background-color: rgba(128, 128, 128, 0.5);
				border-radius: 10rpx;
				font-size: 25rpx;
			}
		}
	}

	.demo-tag {
		display: flex;
		margin-top: 10rpx;

		.demo-tag-owner {
			border: 1px solid rgb(252, 163, 129);
			color: #ffaa00;
			font-size: 20rpx;
			display: flex;
			align-items: center;
			padding: 4rpx 14rpx;
			border-radius: 50rpx;
		}

		.demo-tag-text {
			border: 1px solid #0af;
			color: #0af;
			margin-left: 20rpx;
			border-radius: 20rpx;
			padding: 4rpx 14rpx;
			font-size: 20rpx;
			display: flex;
			align-items: center;
		}
	}

	.demo {
		display: flex;
		align-items: center;

		image {
			height: 70rpx;
			width: 70rpx;
			border-radius: 30%;
		}
	}
</style>