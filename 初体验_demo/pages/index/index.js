// pages/index/index.js
Page({
  data:{
    text: 'init data',
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    }


  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var app = getApp();
    console.log(app.data);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  
  onPullDownRefresh: function() {
    console.log("下拉");
  },
  onReachBottom: function() {
    console.log("上啦");
  },
  onShareAppMessage: function() {
    console.log("share");
  },
  viewTap: function() {

    console.log('nihao')
    
  },
  changeText: function() {
    this.setData({
      text: 'hahah'
    })
  },
  changeArrText: function() {
    this.setData({
      'array[0].text': 'arr text change'
    })
  },
  changeObjText: function() {
    this.setData({
      'object.text': 'objcet text change'
    }
    )
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  }
  

})