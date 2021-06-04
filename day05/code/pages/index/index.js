// a.8 引入 request 请求库
const ajaxUtil = require("../../ajaxUtil/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // b.1 在 onLoad生命周期中发请求获取数据
    // b.2 success 回调函数 把它定义成箭头函数方式，目的为了能够正确获取当前 this 
    // 目标：使用 promise 对请求 进行封装，async await 讲异步代码改同步，消灭回调地狱
    // let result = await new Promise(function (resolve, reject) {
    //   wx.request({
    //     url: 'https://106.55.254.112/api/public/v1/home/swiperdata',
    //     success: (res) => {
    //       console.log(res.data);
    //       resolve(res.data);
    //     }
    //   })
    // })
    // a.9 调用封装请求方法 获取数据
    let result = await ajaxUtil.request({
      url: 'home/swiperdata'
    })
    console.log(result);
    // console.log(result);
    this.setData({
      swiperData: result.message
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