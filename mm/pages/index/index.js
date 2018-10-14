// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: '',
    second: 0,
    sec: 0,
    min: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onCount: function() {
    var second = this.data.second;
    var sec = this.data.sec;
    var min = this.data.min;
    console.log(second);
    min = parseInt(second / 60);
    this.setData({
      sec: second - (min * 60),
      min: min,
    })
    var that = this;
    this.timer = setTimeout(function() {
      that.setData({
        second: second + 1,
      });
      that.onCount(that);
    }, 1000)
  },
  onStop: function() {
    var timer = this.data.timer;
    var second = this.data.second;
    clearTimeout(this.timer);
    this.setData({
      second: 0,
      sec:0,
      min:0
    })
    this.tips()
  },
  tips:function(){
    console.log("tishi")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})