<template>
	<view>
		
		<cu-custom :isBack="true" bgColor="bg-teda text-white">
			<block slot="backText">返回</block>
			<block slot="content">每月新产品</block>
		</cu-custom>
		
		<view class="VerticalBox">
			<!-- <scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 0upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.id + 1}} 月份
				</view>
			</scroll-view> -->
			
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 0upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 菜单-{{item.name}}</view>
					</view>
					
					<view class="cu-list menu-avatar" @click="toCategory()">
						
						<!-- 产品列表 -->
							<view class="bg-white padding ">
				<view class="grid margin-bottom text-center col-2" v-for="(item,idx) in 2" :key="idx">
					
					<view class="" >
						<view class="cu-card case "  >
			<view class="cu-item  list_item_margin solid" style="margin-left: 0;border-radius: 0; ">
				<view class="image">
					<image src="https://www.wudizu.com/wp-content/uploads/2019/04/mk.jpg" mode="widthFix"></image>
					<view class="cu-tag bg-yellow">促销</view>
					<!-- <view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view> -->
				</view>
				
				<view class="cu-list ">
					<view class="cu-item ">
						
						<view class="content flex-sub" style="padding: 20upx 0;">
							<view class="text-grey">炫彩美白护肤洁面乳大促</view>
							<view class="text-red">¥ 120</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
					</view>		
								
								
					<view class="">
						<view class="cu-card case " :class="isCard?'no-card':''">
			<view class="cu-item shadow list_item_margin solid" style="margin-right: 0; border-radius: 0">
				<view class="image">
					<image src="https://www.wudizu.com/wp-content/uploads/2019/04/mk2.jpg" mode="widthFix"></image>
					<view class="cu-tag bg-yellow">促销</view>
					<!-- <view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view> -->
				</view>
				
				<view class="cu-list ">
					<view class="cu-item ">
						
						<view class="content flex-sub" style="padding: 20upx 0;">
							<view class="text-grey">炫彩美白护肤洁面乳大促</view>
							<view class="text-red">¥ 120</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
					</view>	
									
				</view>
			</view>
					<!-- 产品列表 -->
				
		
						
					
					</view>
				</view>
			</scroll-view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{}];
			for (let i = 0; i < 14; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			toCategory(){
				uni.navigateTo({
					url:'../goods/goods'
				})
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style>
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 155upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
