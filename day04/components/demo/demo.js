Component({
  properties: {},
  data: {},
  methods: {
    handleDemoTap: function () {
      console.log('点击按钮');
      // a.5 触发父组件传入的自定义事件 实现值回传
      // a.6 this.triggerEvent("mytap","参数")
      this.triggerEvent('mytap', '🍎')
    }
  }
})