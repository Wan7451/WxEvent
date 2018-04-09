// pages/second/second.js
var eventUtils=require("../../utils/EventUtils.js");


Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  sendPost:function(){
    eventUtils.post("666666","真溜！");
  }
})