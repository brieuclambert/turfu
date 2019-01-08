<template>
  <div id="app">
    <router-view></router-view>
	<!-- <router-link class="" to="/">Report</router-link> -->
	<p>oiuhrefiouheriufheriuhf</p>
	<div class="" style="width: 200px; height: 300px; border: solid 2px red"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your AB Tasty Module !',
      accessToken: window._ab.accessToken,
      accountId: window._ab.accountId
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h3 {
  font-weight: normal;
}
</style>
