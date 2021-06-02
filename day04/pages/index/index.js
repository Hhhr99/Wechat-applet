Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabItems: [{
        key: "index",
        name: "首页"
      },
      {
        key: "news",
        name: "新闻"
      }, {
        key: "about",
        name: "关于"
      }
    ]
  },
  // b.2 定义一个 tabs点击处理函数
  //b.3 到时 tabs 组件传来值 通过 msg.detail 就可以获取得到
  handleTabsClick: function (msg) {
    console.log(msg.detail);
  },
  handleTap: function (msg) {
    console.log(msg.detail);
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