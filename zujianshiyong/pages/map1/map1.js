Page({
  data: {
    //标记点用于在地图上显示标记的位置
    markers: [{
      iconPath: "../../img/marker_red.png",
      id: 0,
      latitude: null,
      longitude: null,
      width: 50,
      height: 50
    }],
    //在地图上显示控件，控件不随着地图移动
    controls: [{
      id: 1,
      iconPath: '../../img/marker_yellow.png',
      position: {
        left: 0,
        top: 0,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  //视野发生变化时触发
  regionchange(e) {
    console.log(e.type)
  },
  //点击标记点时触发
  markertap(e) {
    console.log(e.markerId)
  },
  //点击控件时触发
  controltap(e) {
    console.log(e.controlId)
  },
  //点击地图时触发
  maptap(e){ 
    console.log("this map is touched")
  },
  onLoad:function(){

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=noGTrfuQWaBsoB6zXX1a3FPWblxQqfW7&location=' + res.latitude + ',' +                     res.longitude + '&output=json&pois=1', data: {},
          header: { 'Content-Type': 'application/json' },
          success: function (ops) {
            　　console.log(ops.data)
          }
        })
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 1
        // })
      }
    });

  }
})