Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList: [{
      id: 1,
      text: "代办事项"
    }, {
      id: 2,
      text: "代办事项2"
    }]
  },
  // 处理删除
  handleDelTodo: function (msg) {
    console.log(msg.detail); // 获取需要删除的 todo 下标
    let index = msg.detail;
    // 获取之前的 todoList
    let todoList = this.data.todoList;
    // 删除对应下标的todo 
    todoList.splice(index, 1);
    // 更新视图
    this.setData({
      todoList
    })
  },
  // 处理输入
  handleTodoInput: function (msg) {
    console.log(Date.now()); // id 时间戳
    console.log(msg.detail); // 输入框值
    // {id:1,text:msg.detail}
    // 获取原先 todoList => this.data.todoList
    let todoList = this.data.todoList;
    // 将 新的 todo项目 推到 todoList 中
    // 但是现在界面还是不会更新
    todoList.push({
      id: Date.now(),
      text: msg.detail
    })
    // setData 方法 更新 data 中值，调用方法同时更新界面
    this.setData({
      // todoList:todoList
      todoList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 传统url: query?good_id=1000
   * window.location.href
   * 微信小程序页面 允许的
   * /pages/index/index?good_id=1000
   */
  onLoad: function (options) {
    // {good_id:1000} => options
    console.log("options:", options);
    console.log("index 页面的 onLoad执行了");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 有点类似 jquery ready 函数
   */
  onReady: function () {
    console.log("index 页面  初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("index 页面看见了");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("index 页面隐藏了");
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
    console.log("执行 onPullDownRefresh");
    // 马上停止下拉刷新效果
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})