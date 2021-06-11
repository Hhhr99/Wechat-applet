// components/myTabs/myTabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    },
    activeTab:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // target:"overall"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick:function(e){
      // console.log(e);
      // console.log(e.target.dataset.target);
      let target = e.target.dataset.target;
      // 子传父 进行激活项的 修改了
      // this.setData({
      //   target
      // })
      this.triggerEvent("mytab",target);
    }
  }
})
