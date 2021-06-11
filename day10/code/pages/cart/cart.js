// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // a.2 定义一个 carts 数据
    carts: []
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
    // a.1 获取本地缓存中的购物车的数据
    // a.1.1 本地缓存中购物车 key cart
    // a.1.2 将 carts 存到 data 中
    let carts = wx.getStorageSync("cart") || [];
    this.setData({
      carts
    })
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