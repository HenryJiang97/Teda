<template>
	<view>
		<view class="action">
			<cu-custom :isBack="true" bgColor="bg-white text-white">
				<block slot="backText">返回</block>
				<block slot="content">高级筛选</block>
			</cu-custom>
		</view>

		<view class="VerticalBox">
			<!-- 左边垂直滑动条  -->
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh)">
				<view class="cu-item text-gray text-sm" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in listscroll"
				 :key="index" @tap="TabSelect" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<!-- ／左边垂直滑动条 -->

			<!-- 右边垂直滑动条 -->
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(90vh )" :scroll-into-view="'main-'+mainCur"
			 @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in listscroll" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="text-green"></text>{{item.name}}</view>
					</view>

					<!-- 右边垂直滑动条具体内容 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<view v-if="item.name === '车型'" class="flex grid col-2 padding-tb-sm">
								<view class="padding-tb-xs text-center" ><button  class="cu-btn my_width line-gray shadow text-sm">三厢轿车</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">SUV</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">两厢轿车</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">MPV</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">旅行车</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">跑车</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">面包车</button></view>
								<view class="padding-tb-xs text-center"><button  class="cu-btn my_width line-gray shadow text-sm">皮卡</button></view>
							</view>


							<view v-else-if="item.name === '变速箱'" class="flex grid col-2">
								<view class="padding-tb-xs"><button class="cu-btn my_width line-gray shadow text-sm">手动挡</button></view>
								<view class="padding-tb-xs"><button class="cu-btn my_width line-gray shadow text-sm">自动挡</button></view>
																<view class="padding-tb-xs"><button class="cu-btn my_width line-gray shadow text-sm">自动挡</button></view>


								<view class="padding-tb-xs"><button class="cu-btn my_width line-gray shadow text-sm">自动挡</button></view>


								<view class="padding-tb-xs"><button class="cu-btn my_width line-gray shadow text-sm">自动挡</button></view>

							</view>

							<view v-else-if="item.name === '车源类型'" class="flex grid col-2">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">一成购</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">分期购</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">视频车辆</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">超值车辆</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">金牌认证</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">银牌认证</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">3天无理由</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">VR车源</button></view>
							</view>

							<view v-else-if="item.name === '车龄'" class="flex ">
								<view class="uni-padding-wrap uni-common-mt">
									<view class="uni-title text-sm">车龄／年</view>
									<view>
										<slider block-size="15" max="6" value="6" show-value @change="sliderChange" />
									</view>
								</view>
							</view>

					<!-- 		<view v-else-if="item.name === '里程'" class="flex ">
								<view class="uni-padding-wrap uni-common-mt">
									<view class="uni-title text-sm">里程／万公里</view>
									<view>
										<slider block-size="15" max="15" value="15" show-value @change="sliderChange" />
									</view>
								</view>
							</view>
							
							<view v-else-if="item.name === '排量'" class="flex ">
								<view class="uni-padding-wrap uni-common-mt">
									<view class="uni-title text-sm">排量／L</view>
									<view>
										<slider block-size="15" max="5" value="5" step="3" show-value @change="sliderChange" />
									</view>
								</view>
							</view> -->
							
							<view v-else-if="item.name === '排放标准'" class="flex grid col-2">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">国三以上</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">国四以上</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">国五</button></view>
							</view>
							
							<view v-else-if="item.name === '颜色'" class="flex grid col-3">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">黑色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">深灰色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">银灰色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">白色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">香槟色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">黄色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">橙色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">红色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">蓝色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">粉红色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">紫色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">咖啡色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">绿色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">多彩色</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">其他</button></view>
							</view>
							
							<view v-else-if="item.name === '燃料类型'" class="flex grid col-2">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">汽油</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">柴油</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">电动</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">油电混合</button></view>
							</view>
							
							<view v-else-if="item.name === '厂商类型'" class="flex grid col-2">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">合资</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">进口</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">国产</button></view>
							</view>
							
							<view v-else-if="item.name === '座位数'" class="flex grid col-2">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">2座</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">4座</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">5座</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">7座</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">7座以上</button></view>
							</view>
							
							<view v-else-if="item.name === '国别'" class="flex grid col-3">
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">德系</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">日系</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">韩系</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">美系</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">法系</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">中国</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">非国产</button></view>
								<view class="padding-tb-xs"><button  class="cu-btn my_width line-gray shadow text-sm">非日系</button></view>
							</view>
						</view>
					</view>
					<!-- ／右边垂直滑动条具体内容 -->

				</view>
			</scroll-view>
			<!-- ／右边垂直滑动条 -->
		</view>
	</view>
</template>

<script>
	import data from '@/common/data.js'
	export default {
		data() {
			return {
				listscroll: [],
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
			let listscroll = [{}];
			for (let i = 0; i < 26; i++) {
				listscroll[i] = {};
				listscroll[i].name = String.fromCharCode(65 + i);
				listscroll[i].id = i;
			}
			this.listscroll = data.listscroll;
			this.listCur = listscroll[0];
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			sliderChange(e) {
				console.log('value 发生变化：' + e.detail.value)
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				return false //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.listscroll.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.listscroll[i].id);
						view.fields({
							size: true
						}, data => {
							this.listscroll[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.listscroll[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.listscroll.length; i++) {
					if (scrollTop > this.listscroll[i].top && scrollTop < this.listscroll[i].bottom) {
						this.verticalNavTop = (this.listscroll[i].id - 1) * 50
						this.tabCur = this.listscroll[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style>

</style>
