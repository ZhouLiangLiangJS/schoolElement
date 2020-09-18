<template>
  <div id="app">
    <Navmenu :active="0"></Navmenu>
    <router-view />
  </div>
</template>

<script>
  import Navmenu from './components/navmenu.vue'
  export default {
    name: 'App',
    components: {
      Navmenu
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .title{
    font-size: 16px;
  }
  
  #app {
    width: 100vw;
    height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .fr {
    float: right;
  }

  .main {
    width: 84.91vw;
    height: 100vh;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    float: left;
    position: relative;
    font-size: 14px;
  }

  .center {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .center-x{
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  .center-y{
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }
</style>
