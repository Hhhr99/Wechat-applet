// pages/goodDetail/goodDetail.js
// a.2 引入 请求库
let ajaxUtil = require("../../ajaxUtil/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // a.5 定义一个 goodInfo 空对象，用来存储商品信息的
    goodInfo: {}
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
    let {
      goods_id
    } = options;
    console.log(goods_id);
    // a.4 发请求获取数据  await !!!
    let result = await ajaxUtil.request({
      url: "goods/detail",
      data: {
        // goods_id:goods_id
        goods_id
      }
    })
    // a.6 将商品返回的数据 通过 setData 存到 data 中
    this.setData({
      goodInfo: result.message
    })
  },
  handleCollect: function () {
    console.log("收藏商品");
    // b.1 将商品数据存到本地缓存中
    // b.1.1 收藏本地缓存的 key 名称叫 collect
    // b.1.2 收藏本地缓存中数据 [goodInfo,goodInfo,goodInfo]
    // b.1.3 用本地缓存中同步方式 存商品的收藏信息
    // b.1.4 获取之前本地缓存中的数据
    let collect = wx.getStorageSync('collect') || []; // 比如说，第一次进来的时候，获取不到 收藏信息信息，所以要做一个异常处理
    // b.1.4.1 判断当前的商品是否在 collect 对象中,根据是 goods_id
    //  collect.findIndex

    // b.1.5 将当前商品信息 保存到 collect 对象中
    collect.push(this.data.goodInfo);

    wx.setStorageSync('collect', collect)
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