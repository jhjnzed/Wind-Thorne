<template>
  <div class="route">
    <!-- to属性相当于href 添加链接 -->
    <router-link to="/">首页</router-link>
    <router-link to="/Music">音乐</router-link>
    <!-- 添加路由对应的视图 -->
    <router-view></router-view>
  </div>
</template>
S
<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
