<template>
  <div>
    <Navmenu :active="0"></Navmenu>
    <div class="main">
      <div class="main_box">

      </div>
    </div>
  </div>
</template>

<script>
  import Navmenu from "./navmenu"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      Navmenu
    }
  }
</script>

<style scoped>
  h1,
  h2 {
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
  .main{
    width: 84.91vw;
    height: 100vh;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    float: left;
    position: relative;
  }
  .main_box{
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
