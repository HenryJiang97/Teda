<template>
  <div class="address">
		
		<cu-custom :isBack="true" bgColor="bg-teda text-white">
			<block slot="backText">返回</block>
			<block slot="content">选择地址</block>
		</cu-custom>

    <scroll-view scroll-y="true" class="addcont" style="height: 100%;">
      <!-- <div class="addcont"> -->
      <div v-if="listData.length!=0" class="item">
        <div class="list" v-for="(item, index) in listData" :key="index">
          <div class="addresslist" :style="item.textStyle">
            <div>
              <span>{{item.name}}</span>
              <div v-if="item.is_default" class="moren">
                默认
              </div>
            </div>
            <div @click="selAddress(item.id)" class="info">
              <p>{{item.mobile}}</p>
              <p>{{item.address+item.address_detail}}</p>
            </div>
            <div @click="toDetail(item.id)"></div>

          </div>
        </div>

      </div>

      <div v-else class="center">
        <p>收货地址在哪里?</p>
      </div>
    </scroll-view>

    <div class="bottom">
      <div @click="wxaddress(1)">+新建地址</div>
      <div @click="wxaddress">一键导入微信地址</div>
    </div>
  </div>
</template>

<script>
import { get, getStorageOpenid } from "../../utils";
export default {
  onShow() {
    this.openId = getStorageOpenid();
    this.getAddressList();
  },
  created() {},
  computed: {},
  data() {
    return {
      listData: []
    };
  },
  components: {},
  methods: {
    selAddress(id) {
      wx.setStorageSync("addressId", id);
      // wx.redirectTo({ url: "/pages/order/order?id=" + id });
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    toDetail(id) {
      console.log(id);
      wx.navigateTo({
        url: "/pages/addaddress/addaddress?id=" + id
      });
    },
    async getAddressList() {
      var _this = this;
      const data = await get("/address/getListAction", {
        openId: _this.openId
      });
      for (var i = 0; i < data.data.length; i++) {
        data.data[i].textStyle = "";
        data.data[i].textStyle1 = "";
      }
      this.listData = data.data;
      console.log(this.listData);
    },
    wxaddress(index) {
      if (index == 1) {
        wx.navigateTo({
          url: "/pages/addaddress/addaddress"
        });
      } else {
        wx.chooseAddress({
          success: function(res) {
            var res = encodeURIComponent(JSON.stringify(res));
            wx.navigateTo({
              url: "/pages/addaddress/addaddress?res=" + res
            });
          }
        });
      }
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
