<template>
    <div class="easy-toast" v-show="show">
      <div class="easy-toast-mask" v-show="maskShow"></div>
      <div class="easy-toast-content">{{message}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'easy-toast',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      maskShow: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: '信息提醒'
      },
      duration: {
        type: Number,
        default: 2500
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .easy-toast {
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 999
    &-mask {
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, .5)
    }
    &-content {
      position: absolute
      top: 50%
      left: 50%
      padding: 10px
      max-width: 300px
      font-size: 14px
      color: #fff
      text-align: center
      line-height: 1.4
      background: rgba(0, 0, 0, .6)
      box-sizing: border-box
      transform: translate(-50%, -50%)
    }
  }
</style>
