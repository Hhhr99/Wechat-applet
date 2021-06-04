// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    // b.1 在 onLoad生命周期中发请求获取数据
    // b.2 success 回调函数 把它定义成箭头函数方式，目的为了能够正确获取当前 this 
    wx.request({
      url: 'https://106.55.254.112/api/public/v1/home/swiperdata',
      success: (res) => {
        console.log(res.data);
        // b.3 通过 res.data.message 轮播图中的数据
        this.setData({
          swiperData: res.data.message
        })
      }
    })
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

  }
})