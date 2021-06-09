// pages/goodDetail/goodDetail.js
// a.2 引入 请求库
let ajaxUtil = require("../../ajaxUtil/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // a.5 定义一个 goodInfo 空对象，用来存储商品信息的
    goodInfo: {},
    // b.2 添加一个状态为 is_collect,表示的是当前商品的收藏的状态
    // 默认情况下，当前商品没有收藏
    is_collect: false
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
    // b.5 页面刚加载的时候，判断一下当前的商品的收藏的状态
    // 如果已经收藏  is_collect = true
    // 如果没有收藏  is_collect = false
    let collect = wx.getStorageSync('collect') || [];
    let index = collect.findIndex(v => v.goods_id == goods_id);
    if (index === -1) {
      // 说明商品没有收藏过 is_collect => false
      this.setData({
        is_collect: false
      })
    } else {
      this.setData({
        is_collect: true
      })
    }
    // a.6 将商品返回的数据 通过 setData 存到 data 中
    this.setData({
      goodInfo: result.message
    })
  },
  // 加入购物车 逻辑
  handleAddToCart: function () {
    // c.1 首先从本地缓存中获取当前的购物小车的数据（如果有后台接口，这里应该是从后台接口获取购物车的树）
    // c.1.1 本地缓存中的购物小城 以 cart 为key值存起来
    let cart = wx.getStorageSync('cart') || [];
    // c.2 判断当前的商品在购物小车是否已经存在
    let index = cart.findIndex(v => v.goods_id == this.data.goodInfo.goods_id);
    if (index === -1) {
      // c.3 将当前商品加入到购物小车中
      // c.3.1 goodInfo 选中的状态 checked
      // c.3.2 goodInfo 数量，表示当前选中商品的数量
      // c.3.3 如果当前的商品数量是 0或者由于数量出错，出现负数的情况 ，也是添加不到购物小车中的
      if (this.data.goodInfo.goods_number <= 0) {
        wx.showToast({
          title: '当前的商品库存是为0 ',
        })
      } else {
        let goodInfo = this.data.goodInfo;
        goodInfo.checked = true;
        goodInfo.num = 1;
        cart.push(goodInfo);
        wx.showToast({
          title: '加入购物小车成功了',
        })
      }
    } else {
      // c.4 当前的商品已经在购物车中
      // c.4.1 判断当前的数量大于库存不
      // c.4.2 当前添加的数量大于库存，提供用户操作库存，不能添加
      // c.4.3 否则找到该商品，数量加1
      //debugger
      if (cart[index].num + 1 > this.data.goodInfo.goods_number) {
        wx.showToast({
          title: '添加数量已经超过库存了',
        })
      } else {
        cart[index].num += 1;
        wx.showToast({
          title: '添加商品成功了',
        })
      }
    }
    wx.setStorageSync('cart', cart);
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

    let index = collect.findIndex(v => v.goods_id == this.data.goodInfo.goods_id);
    if (index === -1) {
      // 说明当前的商品不在本地collect 缓存中
      // b.1.5 将当前商品信息 保存到 collect 对象中
      collect.push(this.data.goodInfo);
      // b.3 将当前的收藏的状态为 is_collect 修改成 true
      this.setData({
        is_collect: true
      })
      wx.showToast({
        title: '商品收藏成功了！'
      })
    } else {
      // b.1.6 取消收藏
      collect.splice(index, 1);
      // b.4 取消收藏的时候 将 is_collect 状态修改成 false
      this.setData({
        is_collect: false
      })
      wx.showToast({
        title: '取消收藏！',
      })
    }

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