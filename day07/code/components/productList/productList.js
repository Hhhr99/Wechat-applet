// components/productList/productList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    floorData:{
      type:Array,
      value:[]
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
    goToGoodList:function(e){
      // console.log(e);
      // v 是图片列表循环的时候的 对象
      let v = e.target.dataset.v;
      console.log(v);
      // query="服装"
      let query = v.navigator_url.split("?")[1];
      // 手动跳转
      wx.navigateTo({
        url: '/pages/goodsList/goodsList?'+query,
      })

    }
  }
})
