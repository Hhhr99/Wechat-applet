<template>
	<view>
		<rich-text :nodes="richHtml"></rich-text>
	</view>
</template>

<script>
	export default {
		created() {
			console.log("created 执行了");
		},
		onLoad(options) {
			console.log("onload 执行了");
			console.log(options);
			let {
				id
			} = options;
			uni.request({
				url: "https://unidemo.dcloud.net.cn/api/news/36kr/" + id,
				success: (res) => {
					console.log(res);
					this.richHtml = res.data.content;
				}
			})
		},
		data() {
			return {
				richHtml: ""
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
