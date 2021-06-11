// components/searchInput/searchInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    // a.2 添加跳转到搜索中心的方法和逻辑
    goToSearchCenter:function(){
      // a.3 跳转到搜索中心
      // navigateTo 方法相当于 open-type navigate 类型
      wx.navigateTo({
        url: '/pages/searchCenter/searchCenter',
      })
    }
  }
})
