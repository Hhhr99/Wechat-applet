// a.8 引入 request 请求库
const ajaxUtil = require("../../ajaxUtil/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData:[],
    // b.1 首页分类导航的数据
    navs:[],
    // c.1 首页图片列表的数据
    floorData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // b.1 在 onLoad生命周期中发请求获取数据
    // b.2 success 回调函数 把它定义成箭头函数方式，目的为了能够正确获取当前 this 
    // 目标：使用 promise 对请求 进行封装，async await 讲异步代码改同步，消灭回调地狱
    // new Promise(function(resolve,reject){
    //   console.log("123");
    //   resolve(456)
    // }).then((res)=>{
    //   console.log("then：",res);
    // })
  //  let p =  await new Promise(function(resolve,reject){
  //     console.log("123");
  //     resolve(789)
  //   })
  //   console.log(p);
  // new Promise(function(resolve,reject){
  //   wx.request({
  //     url: 'https://106.55.254.112/api/public/v1/home/swiperdata',
  //     success:(res)=>{
  //       // console.log(res.data);
  //       resolve(res.data);
  //     }
  //   })
  // }).then(res=>{
  //   console.log(res);
  // })
  // let result = await new Promise(function(resolve,reject){
  //   wx.request({
  //     url: 'https://106.55.254.112/api/public/v1/home/swiperdata',
  //     success:(res)=>{
  //       // console.log(res.data);
  //       resolve(res.data);
  //     }
  //   })
  // })
  // a.9 调用封装请求方法 获取数据
  let result = await   ajaxUtil.request({
      // data:{},
      // method:"post",
      url:'home/swiperdata'
    })
    // b.2 调用接口，获取分类导航的数据
    let result2 = await ajaxUtil.request({
      url:"home/catitems"
    })
    // c.2 调用首页图层接口，获取图片列表的数据
    let result3 = await ajaxUtil.request({
      url:"home/floordata"
    })
    // console.log(result);
  // console.log(result);
  // console.log(123)
  // console.log(456)
  // console.log(789)
  // b.3 将分类导航的数据 存到 data 中
  // c.3 将图片列表的数据 存到 data 中
  this.setData({
    swiperData:result.message,
    navs:result2.message,
    floorData:result3.message
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