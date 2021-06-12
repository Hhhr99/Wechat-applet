<template>
	<view class="content">
		<!-- v-for 进行循环 组件使用微信小程序中的组件-->
		<view v-for="(item,index) in news" :key="item.id">
			<navigator :url="'/pages/detail/detail?id='+item.post_id">
				<text>{{item.title}}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			// 小程序中通过获取请求数据的
			// wx => uni
			// 另外程序中打印出来调试信息 要去 具体的开发工具里面才可以看得到
			uni.request({
				url: "https://unidemo.dcloud.net.cn/api/news",
				success: (res) => {
					console.log(res);
					console.log(res.data);
					// 直接赋值给 data 中的news
					this.news = res.data;
				}
			})
		},
		data() {
			return {
				title: '￼helglo',
				news:[]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
