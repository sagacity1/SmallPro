// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');

Page({
  data: {
    weatherData: '',
    originalData:[]
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'vW5D3WG1eYAxBGiruGl4dOxlAMpq3fWZ'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      
      var originalData = data.originalData;
      that.setData({
        weatherData: weatherData,
        originalData: originalData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  }
})
