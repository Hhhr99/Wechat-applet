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
    console.log(options);
    // b.1 定义请求参数
    let params = {}
    // c.1 添加请求参数 cid 如果这个是从分类页面跳转过来的话
    if (options.cid) {
      params.cid = options.cid;
      this.cid = options.cid;
    }
    // b.2 查询参数 query
    if (options.query) {
      params.query = options.query
      this.query = options.query;
    }
    params.pagenum = this.pagenum;
    params.pagesize = this.pagesize;
    // console.log(this);
    // a.3 发异步请求获取数据
    let result = await ajaxUtil.request({
      // c.2 将请求参数添加到 data 请求参数数据中
      data: {
        ...params // {query:"",pagesize:20,pagenum:1}
      },
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
  // 获取最新列表的内容
  getProductList: async function () {
    // 构造请求参数
    let params = {};
    if (this.query) {
      params.query = this.query;
    }
    if (this.cid) {
      params.cid = this.cid;
    }
    params.pagenum = 1;
    params.pagesize = this.pagesize;
    let result = await ajaxUtil.request({
      url: "goods/search",
      data: {
        ...params
      }
    })
    this.total = result.message.total;
    this.pagenum = result.message.pagenum;
    this.setData({
      goods: result.message.goods
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 下拉清空列表，加载最新的数据
    console.log("用户下拉了");
    this.setData({
      goods: []
    })
    // 调用获取最新产品列表函数
    this.getProductList();
    // 停止下拉
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onReachBottom: async function () {
    console.log("触底了");
    // pagenum 1 => pagenum+1 =>2 发请求
    // .....
    // pagenum 5
    // 31/20
    // 因为返回的 pagenum 是一个字符串，所以这边要用 parseInt 进行整数的转换
    // Math.ceil 向上取整
    if (parseInt(this.pagenum) + 1 <= Math.ceil(this.total / this.pagesize)) {
      // 允许发请求拿下一页的数据
      console.log("请求下一页的数据");
      // 默认 返回的 pagenum 字符串 转换成 数字
      this.pagenum = parseInt(this.pagenum) + 1;
      let params = {};
      if (this.cid) {
        params.cid = this.cid;
      }
      if (this.query) {
        params.query = this.query;
      }
      params.pagesize = this.pagesize;
      params.pagenum = this.pagenum; // 1+1=2
      // 发下一页的请求
      let result = await ajaxUtil.request({
        url: "goods/search",
        data: {
          ...params
        }
      })
      console.log(result);
      // 追加到 goods
      this.setData({
        goods: [
          ...this.data.goods,
          ...result.message.goods
        ]
      })
    } else {
      wx.showToast({
        title: '已经到最后一页了',
      })
    }
  },
})