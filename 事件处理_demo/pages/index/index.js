//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  view11Click: function(event) {
    console.log("view11点击了")
    console.log(event)
  },
  view22Click: function(event) {
    console.log("view22点击了")
  },
  view33Click: function(event) {
    console.log("view33点击了")
    console.log(event)
  },


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
