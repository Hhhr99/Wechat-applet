App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("执行应用生命周期 onLaunch 函数");
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // throw new Error("自己跑出来的错误的信息");
    console.log("应用生命周期 onShow");
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("执行应用生命周期 onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("异常信息：", msg);
    // console.warn("异常信息：",msg);
    // console.error("异常信息：",msg);
  },
  onPageNotFound: function (msg) {
    console.log(msg);
  },
})