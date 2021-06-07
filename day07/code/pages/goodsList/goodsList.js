// pages/goodsList/goodsList.js
// a.1. 引入请求模块
let ajaxUtil = require("../../ajaxUtil/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // a.4 定义一个 data goods
    goods: [],
    activeTab: "overall",
    tabs: [{
      text: "综合",
      target: "overall"
    }, {
      text: "销量",
      target: "sale"
    }, {
      text: "价格",
      target: "price"
    }]
  },
  // a.5 定义 total,pagenum,pagesize(默认20),query,cid
  total: 0,
  pagenum: 1,
  pagesize: 20,
  query: "",
  cid: "",
  handleTabClick: function (e) {
    // console.log(e);
    // console.log("点击的项：",e.detail);
    this.setData({
      activeTab: e.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // a.2 函数 添加 async 关键词
  onLoad: async function (options) {
    // console.log(options);
    // console.log(this);
    // a.3 发异步请求获取数据
    let result = await ajaxUtil.request({
      url: "goods/search"
    })
    console.log(result);
    // a.6 total,pagenum,pagesize,goods 赋值
    this.total = result.message.total;
    this.pagenum = result.message.pagenum;
    this.pagesize = 20; // 默认值是 20
    this.setData({
      goods: result.message.goods
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