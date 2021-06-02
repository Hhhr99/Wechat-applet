Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 传统url: query?good_id=1000
   * window.location.href
   * 微信小程序页面 允许的
   * /pages/index/index?good_id=1000
   */
  onLoad: function (options) {
    // {good_id:1000} => options
    console.log("options:", options);
    console.log("index 页面的 onLoad执行了");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 有点类似 jquery ready 函数
   */
  onReady: function () {
    console.log("index 页面  初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("index 页面看见了");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("index 页面隐藏了");
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
    console.log("执行 onPullDownRefresh");
    // 马上停止下拉刷新效果
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})