Component({
  // vue props 
  properties:{
    innerText:{
      type:String,
      value:"innerText"
    }
  },
  data:{
    msg:"(*^_^*)"
  },
  // Page 页面中方法是跟 data 同层级的
  // Component 中 方法定义在 methods 属性中
  methods:{
    handleClick:function(){}
  }

})