<template>
  <div class="del" v-show="flag">
    <div class="tishi center">
      <div class="tishi_title">{{title}}</div>
      <div class="tishi_cen" v-html="htmlMessage"></div>
      <input type="password" v-model="password" placeholder="请输入密码">
      <div class="qr">
        <el-button @click="qr">{{queRen}}</el-button>
        <el-button style="color: #707070;background-color: #FFFFFF;" @click="close">{{quXiao}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: false,
        password: ''
      }
    },
    props: ['html',
      'title',
      'quXiao',
      'queRen',
    ],
    methods: {
      close() {
        this.flag = false
      },
      open() {
        this.flag = true
      },
      qr() {
        if (this.password != "") {
          this.flag = false
          this.$emit('canMif', this.password)
          this.password = ""
        } else {
          this.$alert('请输入密码', '系统提示', {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
        }
      }
    },
    computed: {
      htmlMessage: function() {
        let arr = this.html.split('+');
        return `${arr[0]}<span style="font-weight:900;">${arr[1]}</span>${arr[2]}`;
      }
    }
  }
</script>

<style scoped>
  .del {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .tishi {
    width: 500px;
    padding: 20px 40px;
    box-shadow: 0px 3px 6px #00000029;
    background-color: #FFFFFF;
  }

  .tishi_title {
    font-weight: 900;
    font-size: 18px;
    color: red;
  }

  .tishi_cen {
    line-height: 30px;
    margin-top: 10px;
    color: #707070;
  }

  .tishi>input {
    border: 1px solid var(--unnamed-color-d5d5d5);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D5D5D5;
    width: 198px;
    line-height: 30px;
    padding: 0 10px;
    margin-top: 10px;
  }

  .qr {
    margin-top: 20px;

  }

  .qr button {
    padding: 0;
    border-radius: 0;
    background-color: #52BF8A;
    color: #FFFFFF;
    box-shadow: 0px 3px 2px #00000029;
    font-weight: 900;
    line-height: 35px;
    padding: 0 30px;
    margin-right: 30px;
    border: 0;
  }
</style>
