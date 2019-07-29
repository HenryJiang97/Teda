<template>
	<div class="my">
		<cu-custom bgColor="bg-teda" :isBack="true">
			<block slot="backText">{{i18n.commonBack}}</block>
			<block slot="content">{{i18n.myTitle}}</block>
		</cu-custom>

		<div class="main">
			<!-- 个人资料 -->
			<!--	<view class="cu-bar margin-bottom-sm bg-white solid-bottom" style="padding: 20upx 0;">

				<view class="action">
					<view class="cu-avatar lg round" :style="'background-image:url(' + wxProfile.avatarUrl + ')'"></view>
				</view>

				<div class="name">
					{{wxProfile.nickName}}
				</div>

				<view class="action"><button class="cu-btn bg-green shadow" @tap="jump('information')">{{i18n.editUserInfo}}</button></view>
			</view>	-->

			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style=" 'background-image:url('+userInfo.wxProfile.avatarUrl+');'"></view>
					<view class="content">
						<view>
							<text class="text-cut margin-top-sm">{{userInfo.wxProfile.nickName}}<text class='cu-tag radius text-teda text-sm margin-left-xs'>认证用户/商家</text></text>
						</view>
						<view class="text-gray text-sm flex padding-top-xs"><text class='text-gray text-sm padding-right'>声望 105</text><text class="text-gray text-sm margin-right-xs flex">帖子获赞数量{{userInfo.likenumber}}<text class='text-gray text-sm margin-left-xs padding-left-sm'>粉丝{{userInfo.follower}}关注{{userInfo.following}}</text></text>
						</view>
					</view>
				</view>
			</view>
			<!-- 个人资料 -->
			<!--	<button type="primary" @click="connectMagento()">注册到magento</button>		-->

			<!-- 常用菜单 -->
			<!--	<view class="cu-list col-3 grid sm-border">
				<view class="cu-item" @tap="jump('save')">
					<view class="cuIcon-like">
						<view class="cu-tag badge">
							<block>11</block>
						</view>
					</view>
					<text>{{i18n.myWishlist}}</text>
				</view>
				<view class="cu-item" @tap="jump('order')">
					<view class="cuIcon-form">
						<view class="cu-tag badge">
							<block>11</block>
						</view>
					</view>
					<text>{{i18n.myOrders}}</text>
				</view>
				<view class="cu-item" @tap="jump('address')">
					<view class="cuIcon-addressbook">
						<view class="cu-tag badge">
							<block>11</block>
						</view>
					</view>
					<text>{{i18n.myAddress}}</text>
				</view>
			</view>  -->

			<!-- 常用菜单 -->

			<!-- 列表菜单 -->
			
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
						<view class="cu-item arrow" @tap="jump('garage')">
							<navigator class="content" hover-class="none" open-type="redirect" url="">
								<text class="cuIcon-friendadd text-black"></text>
								<text class="text-grey">我的车辆</text>
							</navigator>
						</view>

						<view class="cu-item arrow" @tap="jump('chat')">
							<navigator class="content" hover-class="none" open-type="redirect" url="">
								<text class="cuIcon-write text-black"></text>
								<text class="text-grey">我的聊天</text>
							</navigator>
						</view>

						<view class="cu-item arrow">
							<navigator class="content" hover-class="none" open-type="redirect" url="">
								<text class="cuIcon-read text-black"></text>
								<text class="text-grey">浏览历史</text>
							</navigator>
						</view>

						<view class="cu-item arrow">
							<navigator class="content" hover-class="none" @tap="jump('order')">
								<text class="cuIcon-moneybag text-black"></text>
								<text class="text-grey">交易记录</text>
							</navigator>
						</view>

						<view class="cu-item arrow">
							<navigator class="content" hover-class="none" @tap="jump('post')">
								<text class="cuIcon-favor text-black"></text>
								<text class="text-grey">我的收藏</text>
							</navigator>
						</view>

						<view class="cu-item arrow">
							<navigator class="content" hover-class="none" @tap="jump('')">
								<text class="cuIcon-service text-black"></text>
								<text class="text-grey">联系客服</text>
							</navigator>
						</view>

						<view class="cu-item arrow">
							<navigator class="content" hover-class="none" @tap="jump('')">
								<text class="cuIcon-group text-black"></text>
								<text class="text-grey">关于我们</text>
							</navigator>
						</view>
						
						<view class="cu-item arrow" @tap="jump('setting')">
							<navigator class="content" hover-class="none" open-type="redirect" url="">
								<text class="cuIcon-settings text-black"></text>
								<text class="text-grey">设置</text>
							</navigator>
						</view>
					</view>
				<footMenu :pageUrl="'my'"></footMenu>
			</view>
			<!-- 列表菜单 -->
		</div>

	</div>
</template>

<script>
	import Parse from '../../common/parse.js'
	import data from '@/common/data.js'
	import {
		get,
		toLogin,
		login
	} from '../../utils';
	export default {
		// onShow() {
		// 	console.log('开始检查登录情况');
		// 	this.$store.commit('needLogin');
		// 	this.wxProfile = this.$store.state.wxProfile
		// },
		onLoad() {
			this.getuserStatus()
		},
		created() {},
		mounted() {},

		data() {
			return {
				four: [],
				userInfo: {},
				iconList: [{
						icon: 'favor',
						color: 'green',
						badge: 120,
						name: '我的收藏'
					},
					{
						icon: 'message',
						color: 'green',
						badge: 1,
						name: '我的留言'
					},
					{
						icon: 'pic',
						color: 'green',
						badge: 0,
						name: '我的图片'
					},
					{
						icon: 'noticefill',
						color: 'olive',
						badge: 22,
						name: '通知'
					},
					{
						icon: 'upstagefill',
						color: 'cyan',
						badge: 0,
						name: '排行榜'
					},
					{
						icon: 'clothesfill',
						color: 'blue',
						badge: 0,
						name: '皮肤'
					},
					{
						icon: 'discoverfill',
						color: 'purple',
						badge: 0,
						name: '发现'
					},
					{
						icon: 'questionfill',
						color: 'mauve',
						badge: 0,
						name: '帮助'
					},
					{
						icon: 'commandfill',
						color: 'purple',
						badge: 0,
						name: '问答'
					},
					{
						icon: 'brandfill',
						color: 'mauve',
						badge: 0,
						name: '版权'
					}
				],

				avator: '',
				allcheck: false,
				listData: [],
				Listids: [],
				
				
			};
		},
		components: {},
// 		onLoad: function() {
// 			console.log(data)
// 			this.four = data.four
// 			
// 		},
// 
		methods: {
			
			getuserStatus(){
				Parse.Cloud.run('userInfo')
				.then(r=>{
					this.userInfo = r._toFullJSON()
					
					console.log('777777'+this.userInfo.wxProfile.nickName)
					
				})
				
			},
			
			
			
			connectMagento() {
				// this.$http({
				// 	url: '/restful/customers',
				// 	method: 'POST',
				// 	data: {
				// 		id: this.$store.state.openId
				// 	},
				// 	success: res => {
				// 		console.log(res)
				// 	},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
				let Uid = Parse.User.current().toJSON().authData.weapp.id
				Parse.Cloud.run('customers', {
						id: Uid
					})
					.then(r => console.log('r' + JSON.stringify(r)))
					.catch(e => console.log('e' + JSON.stringify(e)))
			},
			jump(pageName) {
				uni.redirectTo({
					url: `../${pageName}/${pageName}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			changeLanguage(e) {
				// console.log('修改语言' + e.target.value);
				if (e.target.value) {
					this.$store.commit('setLang', 'zh-CN')
					console.log('切换为中文');
				} else {
					console.log('切换为英文文');
					this.$store.commit('setLang', 'en-US')
				}
				console.log('this.$store.state.lang' + JSON.stringify(this.$store.state.lang));
				this.$i18n.locale = this.$store.state.lang
			},
		},
		computed: {}
	};
</script>
<style scoped>
	.uni-list-cell-navigate img {
		width: 30upx;
		height: 30upx;
	}

	.uni-list-cell-navigate {
		justify-content: start;
	}
</style>
