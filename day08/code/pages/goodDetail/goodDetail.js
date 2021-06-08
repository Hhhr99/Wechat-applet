// pages/goodDetail/goodDetail.js
// a.2 引入 请求库
let ajaxUtil = require("../../ajaxUtil/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // a.5 定义一个 goodInfo 空对象，用来存储商品信息的
  goodInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // a.3 onLoad 函数添加 async 关键词
  onLoad: async function (options) {
    // console.log(options);
    // a.1 获取 页面 传递过来的商品id
    // let goods_id = options.goods_id;
    // console.log(goods_id);
    // a.1 补充 es6 提供解构赋值语法
    let { goods_id } = options;
    console.log(goods_id);
    // a.4 发请求获取数据  await !!!
    let result = await ajaxUtil.request({
      url:"goods/detail",
      data:{
        // goods_id:goods_id
        goods_id
      }
    })
    // a.6 将商品返回的数据 通过 setData 存到 data 中
    this.setData({
      goodInfo:result.message
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