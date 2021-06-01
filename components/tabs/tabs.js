// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  /* b.3 接收父组件传入tab项目的值 */
  properties: {
     tabs:{
       type:Array,
       value:[]
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /* a.4 定义一个 activeTab 变量，表示当前激活的 tab项目 */
    activeTab: "index"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* a.3 定义 点击tab 处理函数 */
    handleTap: function (e) {
      console.log(e);
      console.log("点击的项目：", e.target.dataset.item);
      /* a.5 通过 this.setData({activeTab: e.target.dataset.item}) */
      this.setData({
        activeTab: e.target.dataset.item
      })

    },
  }
})