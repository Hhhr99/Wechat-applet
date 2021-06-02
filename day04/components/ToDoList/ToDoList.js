// components/ToDoList/ToDoList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todoList: {
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
    // 删除 todo
    delTodo: function (e) {
      console.log(e.target.dataset.index);
      // 回传下标的参数
      this.triggerEvent("deltodo", e.target.dataset.index)
    }
  }
})