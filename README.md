# easy-toast
vue插件easy-toast，消息提醒框

1.安装npm包
```
npm i leiang-easy-toast
```

2.main.js入口文件内引用
```
import easyToast from 'leiang-easy-toast'
Vue.use(easyToast)
```

# 使用方式
```
this.$easyToast.use({
  message: 'message'
})
```

# API
- options:
  show（信息提示框是否隐藏，Boolean类型，默认：false；非必须参数）
  maskShow（是否显示半透明遮罩层，Boolean类型，默认：false）
  message（消息提示文本，String类型，默认：''）
  duration（延迟隐藏信息提示框，Number类型，默认：2500）

- 显示隐藏的消息提示框
  this.$easyToast.show()

- 隐藏消息提示框
  this.$easyToast.close()

# 注意事项
- duration传入0时，则需要手动调用close方法隐藏；
