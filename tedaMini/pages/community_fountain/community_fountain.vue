<template>
	<view>
		<cu-custom bgColor="bg-teda">
			<block slot="content">{{ i18n.com }}</block>
		</cu-custom>

		<!-- 工具栏 -->

		<div class="cu-bar padding-lr bg-white solid ">
			<div class="item" @click='getStatus(0)'>
				{{ i18n.comFollow }}
				<text class=" margin-left-xs"></text>
			</div>
			<div class="item" @click='getStatushot(0)'>
				{{ i18n.comPublic }}
				<text class=" margin-left-xs"></text>
			</div>
			<div class="item" @click='getStatusme(0)'>
				{{ i18n.comMe }}
				<text class=" margin-left-xs"></text>
			</div>

			
		</div>
		<!-- 工具栏 -->

		

		<div class="pins padding-sm" style="column-count: 2;column-gap: 18upx;">
			<view class="cu-card dynamic no-card margin-bottom-sm radius" v-for="(x, s) in bookList" :key="s">
				<!-- v-for="(x, s) in comList" :key="s" -->
				
				<view class="cu-item shadow" >
					<view class="grid flex-sub padding-0 col-1" @tap="toDetail" :data-id="x.objectId">
						<view class="bg-img only-img" :style=" 'background-image:url('+ tempaddr+x.poster+');'"></view>
					</view>
					
					<view class="cu-list menu-avatar" v-if="x.user">
						<view class="cu-item " style="height: 100upx;">
							<view class="cu-avatar round " :style="'background-image:url(' + x.user.wxProfile.avatarUrl + ')'"></view>
							<view class="" style="width: 65%;">
								<view>{{ x.user.wxProfile.nickName }} </view>
								<view class="text-gray text-sm flex justify-between">{{ x.time }}</view>
							</view>
						</view>
					</view>

					<view class="text-gray text text-right margin-bottom-sm margin-right"  >
						<text v-if='x.redheart' class="cuIcon-likefill margin-lr-xs"  @tap='addLike':data-id="x.objectId":data-name="'Publish'">{{x.like}}</text>
						<text v-else class="cuIcon-like margin-lr-xs"  @tap='addLike':data-id="x.objectId":data-name="'Publish'">{{x.like}}</text>
						
						<text class="cuIcon-favor margin-lr-xs"></text>
						20
						<text class="cuIcon-message margin-lr-xs"></text>
						30
					</view>
				</view>
			</view>
		</div>

		<!-- 发布按钮 -->
		<view
			@tap="publishContent"
			class="add round bg-gradual-orange text-xxl text-bold text-blue flex justify-center align-center"
			style="width: 100upx; height: 100upx;position: fixed;bottom: 120upx; right:20upx;z-index:  1024;box-shadow: 0 4upx 6upx rgba(0, 0, 0, 0.1);"
		>
			<text class="cuIcon-add "></text>
		</view>
		<!-- 发布按钮 -->
		
		<footMenu :pageUrl="'community_fountain'"></footMenu>
	</view>
	
</template>

<script>
import { toParams } from '../../utils/index.js';
import Parse from '../../common/parse.js';
import { mapState } from 'vuex';
import data from '@/common/data.js'

export default {
	data() {
		return {
			status: [],
			modalName: null,
			CustomBar: this.CustomBar, // vue 对象上
            tempaddr:'http://tedacar.oss-us-east-1.aliyuncs.com/',
			TabCur: 0,
			scrollLeft: 0,
			bookList:[],
			like:'',
			signone:'',
			signtwo:'',
			signthree:'',
			skipone:0,
			skiptwo:0,
			skipthree:0,
			
			
		};
	},
	
	onShow(){
		this.getStatus()
    
	},
	
	onReachBottom: function() {
		if(this.signone){
			this.getStatus(10)
		}else if(this.signtwo){
			this.getStatushot(10)
		}else if(this.signthree){
			this.getStatusme(10)
    }
    },
 
  
	onPullDownRefresh: function (){
		if(this.signone){
			this.getStatus(0)
		}else if(this.signtwo){
			this.getStatushot(0)
		}else if(this.signthree){
			this.getStatusme(0)
		}
		
		
	},

	methods: {
		getStatus(skipnumber) {
			console.log(skipnumber)
			if (skipnumber==0){
			this.skipone =0
			}else{
			this.skipone+=skipnumber;
			}
			Parse.Cloud.run('getStatus',{number:this.skipone})
				.then(r => {
					this.skiptwo = 0
					this.skipthree = 0
					console.log(r)
					let i=0;
					this.bookList  = r.map(x => {
						let y = x._toFullJSON();
						if(y.image!=null){
						y.poster = y.image[0];
						}
						
						let t =  new Date(y.createdAt);
						y.time = t.toLocaleString();
						
						this.signone = true
						this.signtwo = false
						this.signthree = false
						
						
						console.log('ddddd22222'+JSON.stringify(y));
						return y;
						
						
					});
					// console.log(this.status);
					// console.log( JSON.stringify(this.status));
				})
				.catch(e => {
					console.log('????' + JSON.stringify(e));
				});
				
		},
		getStatushot(skipnumber) {
			if (skipnumber==0){
			this.skiptwo =0
			}else{
			this.skiptwo+=skipnumber;
			}
			Parse.Cloud.run('getStatushot',{number:this.skiptwo})
				.then(r => {
					this.skipthree = 0
					this.skipone = 0
					console.log(r)
					let i=0;
					this.bookList  = r.map(x => {
						let y = x._toFullJSON();
						if(y.image!=null){
						y.poster = y.image[0];
						}
						
						let t =  new Date(y.createdAt);
						y.time = t.toLocaleString();
						
						this.signone = false
						this.signtwo = true
						this.signthree = false
						console.log('ddddd22222'+JSON.stringify(y));
						return y;
						
						
					});
					// console.log(this.status);
					// console.log( JSON.stringify(this.status));
				})
				.catch(e => {
					console.log('????' + JSON.stringify(e));
				});
				
		},
		getStatusme(skipnumber) {
			if (skipnumber==0){
			this.skipthree =0
			}else{
			this.skipthree+=skipnumber;
			}
			Parse.Cloud.run('getStatusme',{number:this.skipthree})
				.then(r => {
					this.skiptwo = 0
					this.skipone = 0
					let i=0;
					this.bookList  = r.map(x => {
						let y = x._toFullJSON();
						if(y.image!=null){
						y.poster = y.image[0];
						}
						
						let t =  new Date(y.createdAt);
						y.time = t.toLocaleString();
						
						this.signone = false
						this.signtwo = false
						this.signthree = true
						console.log('ddddd22222'+JSON.stringify(y));
						return y;
						
						
					});
					// console.log(this.status);
					// console.log( JSON.stringify(this.status));
				})
				.catch(e => {
					console.log('????' + JSON.stringify(e));
				});
				
		},
		publishContent() {
			let p = {
				targetName: 'Publish', // 留言的对象名字
				pageTitle: this.$t('index.comPubTitle'),
				title: true,
				type: 'postStatus',
				tip: '',
				desc: ''
			};
			uni.navigateTo({
				url: '../publish/publish?' + toParams(p)
			});
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		toDetail(e) {
			console.log('e' + JSON.stringify(e));
			let id = e.mp.currentTarget.dataset.id;
			uni.navigateTo({
				url: `../communityDetail/communityDetail?id=${id}`
			});
		},
		jump(pageName) {
			uni.navigateTo({
				url: `../${pageName}/${pageName}`,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		
// 		testpost(){
// 			Parse.Cloud.run('testpostStatus',{title:'哈哈哈哈',desc:'啦啦啦'}).then()
// 
// 		}
		
		
		
		addLike(e){
			let targetId = e.mp.currentTarget.dataset.id;
			let targetName = e.mp.currentTarget.dataset.name;
			console.log('gggg'+targetName);
			Parse.Cloud.run('addLike',{
				id:targetId,
				name:targetName
			}).then( r => {
				this.like = r._toFullJSON().like;
				if(this.signone){
					this.getStatus()
				}else if(this.signtwo){
					this.getStatushot()
				}else if(this.signthree){
					this.getStatusme()
				}
				
			}).catch( e => {
				console.log('e' + JSON.stringify(e));
			});
		},
		
		
			
		}
		
		
	
};
</script>

<style>
.pins .cu-card {
	display: inline-block;
	width: 100%;
	/* box-shadow: 0 0 10rpx 0 rgba(0,0,0,0.10); */
	break-inside: avoid;
	overflow: auto;
}
</style>