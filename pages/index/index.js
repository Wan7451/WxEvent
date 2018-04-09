//index.js
//获取应用实例
var eventUtils = require("../../utils/EventUtils.js");

Page({
  data: {
    text: '',
  },
  
  sencod:function(){
    wx.navigateTo({
      url: '../../pages/second/second',
    })
  },
  
  onLoad: function (options) {
    eventUtils.register(this,"666666");
  },

  onUnload: function () {
    eventUtils.unregister("666666");
  },

  refresh: function(data){
    this.setData({
      text:data,
    });
  }
})
