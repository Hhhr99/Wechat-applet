Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* a.4 定义一个 activeTab 变量，表示当前激活的 tab项目 */
    activeTab:"index"
  },
  /* a.3 定义 点击tab 处理函数 */
  handleTap:function(e){
    console.log(e);
    console.log("点击的项目：",e.target.dataset.item);
     /* a.5 通过 this.setData({activeTab: e.target.dataset.item}) */
     this.setData({
       activeTab:e.target.dataset.item
     })

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