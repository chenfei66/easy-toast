<template>
  <div id="app">
    <p @click="showMsg1">普通的消息文本，不显示遮罩层，2.5秒后关闭</p>
    <p @click="showMsg2">普通的消息文本，显示遮罩层，2秒后关闭</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    showMsg1() {
      this.$easyToast.use({
        message: '普通的消息文本，不显示遮罩层，2.5秒后关闭'
      })
    },
    showMsg2() {
      this.$easyToast.use({
        message: '普通的消息文本，显示遮罩层，2秒后关闭',
        maskShow: true,
        duration: 2000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
