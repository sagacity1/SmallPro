// pages/ems/ems.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    einputinfo: null,//输入框值
    expressInfo: '', //快递信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //快递输入框事件
 input: function (e) {
    this.setData({ einputinfo: e.detail.value });
  },
 //点击选择快递切换到选择快递页面
 jump: function () {
   //关闭本页去选择快递，返回时就可以重新初始化快递信息哦
   wx.reLaunch({
     url: '../switchcity/switchcity'
   });
 },
  //查询事件
  btnClick: function () {
    var thisexpress = this;
    app.getExpressInfo(this.data.einputinfo, function (data) {
      console.log(data);
      thisexpress.setData({ expressInfo: data })
    })
  }
})