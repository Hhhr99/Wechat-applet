Page({

  /* 
    vue 定义在 method 中
    a.4 定义一个处理函数 处理函数是跟 data属性同层级的
    a.5 会将事件源作为参数传入，通过e参数获取用户的个人信息
  */
  handleUserInfo: function (e) {
    wx.getUserProfile({
      desc: 'desc',
      /* b.4 定义成功之后的回调函数 */
      success:(res)=>{
        /* b.5 通过 res.userInfo 获取用户的个人信息 */
        console.log(res.userInfo);
      },
      fail:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("执行 getUserProfile结束了");
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    swiperData: {
      "message": [{
        "image_src": "https://106.55.254.112/pyg/banner1.png",
        "open_type": "navigate",
        "goods_id": 129,
        "navigator_url": "/pages/goods_detail/main?goods_id=129"
      }, {
        "image_src": "https://106.55.254.112/pyg/banner2.png",
        "open_type": "navigate",
        "goods_id": 395,
        "navigator_url": "/pages/goods_detail/main?goods_id=395"
      }, {
        "image_src": "https://106.55.254.112/pyg/banner3.png",
        "open_type": "navigate",
        "goods_id": 38,
        "navigator_url": "/pages/goods_detail/main?goods_id=38"
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
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