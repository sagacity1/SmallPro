Page({
  data: {
    // text:"这是一个页面"
    srolltop: 0,
    intoview: ""
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },


  srcollToUpper: function (event) {
    //console.log(event)
    console.log("it is top");
  },

  scrollToLower: function (event) {
    //console.log(event)
    console.log("it is down");
  },


  scroll: function (event) {
    // console.log(event)
  },

  click: function () {
    console.log("click...")
    this.setData({ intoview: "blue" })
  }






})
