// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data: {
      searchKey:"",
      suggestArray:[],
      Location:{},
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'NYRBZ-XFZHF-BNZJ7-NZZ6C-Q2QTE-GLFVR' //腾讯地图密钥
    });
  },
  onShow: function () {
  },
  
  //input框输入事件
  bindKeyInput:function(e){
    console.log(e);
    var keyword = e.detail.value;
    var that =this;
    const sysInfo = wx.getSystemInfoSync();
    const winHeight = sysInfo.windowHeight;
      that.setData({
        winHeight: winHeight,

      });
      that.getDistance();
    var Location = that.getLocation(that.getAdressBylocation, keyword);
    // var city= that.getAdressBylocation(Location);
    //that.getSuggestArray(keyword,Location.result.address_component.city);
 
  },
  //获取当前位置的经纬度
  getLocation: function (fu, keyword){
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.setData({
          Location:{
            latitude,
            longitude
          }
        });
        fu(latitude, longitude, keyword, that.getSuggestArray);
      },
      // complete: function (res) {
      //   if(res)
      //   {
      //     }
      // }
    });
  },
   //用于获取输入关键字的补完与提示，帮助用户快速输入
  getSuggestArray: function (e, d){
    var that = this;
    qqmapsdk.getSuggestion({
      keyword: e,
      region:d,
      success: function (res) {
        that.setData({
          suggestArray: res.data,
        
        });
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });

  },
  //逆地址解析
  getAdressBylocation: function (e, d, keyword,fu){
    var that=this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: e,
        longitude: d
      },
      success: function (res) {
        console.log("nidizhi");
        console.log(res);
        //return res;
       fu(keyword, res.result.address_component.city);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
       // console.log(res);
       
      }
    });
  },
  //获取距离
  getDistance:function(){
    qqmapsdk.calculateDistance({
      to: [{
        latitude: 23.13171,
        longitude: 113.266275
      }],
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });

  }
 

})