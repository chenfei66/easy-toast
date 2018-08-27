<template>
  <div id="app">
    <p @click="showMsg1">show message1</p>
    <p @click="showMsg2">show message2</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    showMsg1() {
      this.$easyToast.use({
        message: '的撒里卡积分大联发科就打扫可辣无奈l.djklsajfoi ，假大空老师傅hi偶的加分解到拉萨卡 '
      })
    },
    showMsg2() {
      this.$easyToast.use({
        message: 'OK!'
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
