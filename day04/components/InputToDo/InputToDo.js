// components/InputToDo/InputToDo.js
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
    value: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理input 输入的
    handleInput: function (e) {
      // console.log(e.detail.value);
      // this.data.value = e.detail.value 错误的
      this.setData({
        value: e.detail.value
      })
    },
    // 处理添加按钮
    handleAdd: function () {
      console.log(this.data.value);
      // 将值回传给父组件
      this.triggerEvent("mytodo", this.data.value);
    }
  }
})