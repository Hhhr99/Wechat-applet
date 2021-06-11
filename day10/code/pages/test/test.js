// pages/test/test.js
const htmlSnip =
`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:"(*^_^*)",
      htmlSnip:htmlSnip,
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'You never know what youre gonna get.'
        }]
      }]
  },
  handleTap:function(){
    //? 如何获取 data 中值
    /**
     *  let vm = new Vue({
     *      el:"#app",
            * data:{
            *   msg:"(*^_^*)"
            * }
     * })
     * // data 数据转发
     * Object.defineProperty(vm,"msg",{
     *      get:function(){
     *          return this.$data.msg;
     *       }
     *       set:function(){}
     * })
     * 
     *  
     * console.log(vm.msg);// data 数据转发
     * 
     */
    console.log("this.msg:",this.msg); // vue 直接通过实例之后的对象访问 data数据
    console.log("this.data.msg:",this.data.msg);// 小程序中通过 
  },
  handleStorage:function(){
    // 异步的存，本地存储中，存数据
    // wx.setStorage({
    //   key:"test",
    //   // 和之前的localStorage 不同，web 中的 localStorage 里面只能加 string 类型的
    //   data:{
    //     name:"text"
    //   },
    //   success:function(res){
    //     console.log("存数据成功了:",res);
    //   }
    // })
    // 同步的存
    // wx.setStorageSync('test', {"sex":"男"})
  },
  handleGetStorage:function(){
    // 调用异步的取
    // wx.getStorage({
    //   key:"test",
    //   success:(res)=>{
    //     console.log(res);
    //   }
    // })
    // 同步的取
    let res = wx.getStorageSync('test');
    console.log(res);
  },
  handlePreview:function(){
    let urls = ["http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_800x800.jpg","http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_2_800x800.jpg","http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_3_800x800.jpg"]
    wx.previewImage({
      current:"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_2_800x800.jpg",
      urls: urls,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // 小程序中的下拉 指的是用户的界面下拉
    console.log("小程序中的用户下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("执行上拉触底的事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})