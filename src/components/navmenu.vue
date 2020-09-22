<template>
  <div class="navmenu">
    <div class="navmenu-nav">沧县职教中心 <br>迎新系统</div>
    <div class="navmenu-icon">
      <img src="../../static/icon2.jpg">
      <p>管理员</p>
    </div>
    <div class="navmenu-list">
      <div @click="go(i)" v-for="(item,i) in arrlist" :key="i" :style="active==i?'color: rgb(245, 222, 62);':''">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arrlist: ['新生一览', '教师列表', '缴费管理', '班级管理', '宿舍管理', '发送通知', '常见问题', '系统管理'],
        active: null
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      go(i) {
        switch (i) {
          case 0:
            this.$router.push('/')
            break;
          case 1:
            this.$router.push('teacher')
            break;
          case 2:
            this.$router.push('jfgl')
            break;
          case 3:
            this.$router.push('CGL');
            break;
          case 4:
            this.$router.push('SSGL');
            break;
          case 5:
            this.$router.push('sedTZ');
            break;
          case 6:
            this.$router.push('CJWT');
            break;
          case 7:
            this.$router.push('XTGL');
            break;
        }
      },
      watchPath(e) {
        switch (e) {
          case "Home":
            this.active = 0
            break;
          case "Xjxs":
            this.active = 0
            break;
          case "Teacher":
            this.active = 1
            break;
          case "Join":
            this.active = 1
            break;
          case "Jfgl":
            this.active = 2
            break;
          case "AJF":
            this.active = 2
            break;
          case "JFXQ":
            this.active = 2
            break;
          case "CGL":
            this.active = 3
            break;
          case "SetTab":
            this.active = 3
            break;
          case "GLXQ":
            this.active = 3
            break;
          case "SSGL":
            this.active = 4
            break;
          case 'setSS':
            this.active = 4
            break;
          case 'SSXQ':
            this.active = 4
            break;
          case 'CreateSS':
            this.active = 4
            break;
          case 'sedTZ':
            this.active = 5
            break;
          case 'sendLS':
            this.active = 5
            break;
          case 'TZXQ':
            this.active = 5
            break;
          case 'CJWT':
            this.active = 6
            break;
          case 'TJCJWT':
            this.active = 6
            break;
          case 'XTGL':
            this.active = 7
            break;
        }
        console.log(this.active)
      }
    },
    mounted() {
      this.watchPath(this.$route.name)
    },
    watch: {
      $route(to, from) {
        console.log(to.name)
        this.watchPath(to.name)
      }
    }
  }
</script>
<style scoped>
  .navmenu {
    width: 15.09vw;
    height: 100vh;
    background-color: #272E36;
    position: relative;
    color: #FFFFFF;
    float: left;
  }

  .navmenu-nav {
    top: 5vh;
    width: 210px;
    left: 50%;
    transform: translateX(-50%);
    height: 95px;
    position: absolute;
    font-size: 25px;
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font-weight: 900;
    text-shadow: 0px 3px 10px #FFFFFF29;
    opacity: 1;
  }

  .navmenu-icon {
    top: 21vh;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    position: absolute;
    text-align: center;
  }

  .navmenu-icon>img {
    width: 30px;
  }

  .navmenu-icon>p {
    margin-top: 0;
  }

  .navmenu-list {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 35vh;
  }

  .navmenu-list>div {
    letter-spacing: 10px;
    width: 104px;
    border-bottom: 1px solid #707070;
    line-height: 7vh;
    text-align: center;
    padding-left: 6px;
    cursor: pointer
  }
  .navmenu-list>div:last-child{
    border-bottom: 0;
  }
</style>
