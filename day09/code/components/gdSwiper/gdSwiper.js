// components/gdSwiper/gdSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  // b.2 在 properties 定义父组件传给子组件的属性
  properties: {
    pics: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // c.2 定义一个处理图片点击的方法
    handlePreivew: function (e) {
      // console.log(this);
      // console.log(e);
      let pics = e.target.dataset.pics; // 当前轮播图所有的图片
      let current = e.target.dataset.current; // 当前点击的图片的地址
      // console.log(pics);
      // c.3 通过 wx.previewImage 接口实现图片的预览
      wx.previewImage({
        current: current,
        urls: pics.map(p => p.pics_big_url), // map 循环会返回数组
        // [p.pics_big_url,p.pics_big_url,p.pics_big_url]
      })
    }
  }
})