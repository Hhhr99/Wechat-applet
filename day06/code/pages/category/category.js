// pages/category/category.js
// a.2 引入自定义请求库
const ajaxUtil = require("../../ajaxUtil/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // a.1 定义一个 分类数据源
    categories: [],
    // b.1 定义一个选中项目下标,默认选中第0项
    select_index: 0
  },
  // 点击分类菜单左边项的逻辑
  handleTap: function (e) {
    console.log(e.target.dataset.index);
    this.setData({
      select_index: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // a.3 为 onLoad 回调函数添加 async 关键词
  onLoad: async function (options) {
    // a.4 发请求获取分类的数据
    let result = await ajaxUtil.request({
      url: "categories"
    })
    // console.log(result);
    // a.5 将 分类中的数据 存到 data 中的 categories
    this.setData({
      categories: result.message
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