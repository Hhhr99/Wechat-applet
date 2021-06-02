Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabItems:[
      {
        key:"index",
        name:"首页"
      },
      {
        key:"news",
        name:"新闻"
      },{
        key:"about",
        name:"关于"
      }
    ]
  },
  // a.2 定义一个自定义事件里面处理函数
  // a.3 msg 就是子组件会回传的参数
  handleTap:function(msg){
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