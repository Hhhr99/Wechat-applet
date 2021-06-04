/** *
 * 1. 使用Promise 对 wx.request请求方法进行封装
 * 2. 通用请求URL
 * https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html
 * 3. 加遮罩信息
 * 
 */
const BASE_URL = "https://106.55.254.112/api/public/v1/"
/**
 * 
 * @param {请求的参数} params 
 */
// a.1 使用箭头函数定义一个 request 变量
const request = (params) => {
  // b.1 请求前加载loading 效果
  wx.showLoading({
    title: '加载中......',
    mask: true
  })
  // a.2 返回一个 Promise
  return new Promise(function (resolve, reject) {
    // a.3 发起请求获取数据
    wx.request({
      // a.4 解构 传入的参数
      ...params, // {url:"",headers:{}}
      url: BASE_URL + params.url,
      success: (res) => {
        // a.5 成功的结果
        // a.5.1 返回的数据放在 data属性中的
        resolve(res.data);
      },
      fail: (error) => {
        // a.6 失败的结果
        reject(error);
      },
      complete: () => {
        // b.2 去掉遮罩效果
        wx.hideLoading();
      }
    })

  })
}

// a.7 导出 request 方法
module.exports = {
  request
}