import easyToast from './easy-toast'

// 定义Toast插件对象
let toast = {}

// 使用Vue中的install方法来定义插件
toast.install = (Vue, options) => {
  const Template = Vue.extend(easyToast)
  // 定时器对象
  let timer = null
  let opts
  const initPlugins = () => {
    // 实例化并插入dom元素
    opts = new Template()
    let createDom = opts.$mount().$el
    document.body.appendChild(createDom)
  }

  // 挂载到vue原型并全局注册
  Vue.prototype.$easyToast = {
    use(options) {
      if (!opts) {
        initPlugins()
      }
      Object.assign(opts, options)

      this.show()
      if (opts.duration !== 0) {
        this.setDuration()
      }
    },
    show() {
      opts.show = true
    },
    close() {
      opts.show = false
    },
    setDuration() {
      // 清除隐藏定时器
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.close()
      }, opts.duration)
    }
  }
}

// 模块导出
export default toast
