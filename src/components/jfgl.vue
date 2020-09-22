<template>
  <div>
    <div class="main">
      <div class="main_box">
        <div class="title">
          <div class="title_box">
            <img src="../../static/icon9.jpg" class="center-y" alt="">
            <span>4 个缴费项目</span>
          </div>
          <div class="title_box center">
            <img src="../../static/icon10.jpg" class="center-y" alt="">
            <span>564 笔缴费</span>
          </div>
          <div class="title_box" style="right: 0;">
            <img src="../../static/icon11.jpg" class="center-y" alt="">
            <span>856871.97 元</span>
          </div>
        </div>
        <div class="title leftTitle">
          <div class="title_box" v-for="i in 4" :key="i">
            <div class="title_title">2020-2021学年春秋校服费</div>
            <div class="title_cen">
              <div>
                <div>学生处</div>
                <div>共计：241笔</div>
              </div>
              <div style="width: 40%;">
                <div>500/人</div>
                <div>8596元</div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_main">

          <div class="main_zhuye">
            <div class="main_zhuye_titile" style="width: 15%;">
              姓 名
            </div>
            <div class="main_zhuye_titile" style="width: 25%;">
              学号
            </div>
            <div class="main_zhuye_titile" style="width: 10%;">
              金额
            </div>
            <div class="main_zhuye_titile" style="width: 35%;text-align: left;padding-left: 20px;">
              项目
            </div>
            <div class="main_zhuye_titile" style="width: 15%;">
              时间
            </div>
          </div>
          <div class="mian_school" v-for="i in 10" :key="i" @click="go('/JFXQ')">
            <div class="main_zhuye_titile" style="width: 15%;">
              彭冻革
            </div>
            <div class="main_zhuye_titile" style="width: 25%;">
              308201809092700387
            </div>
            <div class="main_zhuye_titile" style="width: 10%;">
              500
            </div>
            <div class="main_zhuye_titile" style="width: 35%;text-align: left;padding-left: 20px;">
              2020-2021学年春秋校服费
            </div>
            <div class="main_zhuye_titile" style="width: 15%;">
              11-24 23:13
            </div>
          </div>
          <div class="mian_fenye" @click="go('/AJF')">
            查看全部缴费
          </div>
        </div>
      </div>
    </div>
    <Info></Info>
  </div>
</template>

<script>
  import Info from './info'
  export default {
    components: {
      Info
    },
    data() {
      return {
        currentPage3: 5
      }
    },
    methods: {
      handleRouter() {
        this.$router.push('xinjianxs')
      },
      go(e) {
        this.$router.push(e)
      }
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

  .jup {}

  .jup>input {
    border: 0px;
    border-bottom: 1px solid #ccc;
    width: 30px;
  }

  .jup>.jup_btn {
    padding: 0;
    width: 30px;
    height: 20px;
    border-radius: 0px;
  }

  .main {
    width: 84.91vw;
    height: 100vh;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    float: left;
    position: relative;
  }

  .main_box {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    width: 100%;
    height: 13vh;
    position: relative;
  }

  .title_box {
    width: 19.32vw;
    float: left;
    height: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 2px #00000029;
    border: 1px solid #F3F3F3;
    position: absolute;
  }

  .title_box>img {
    width: 3vw;
    position: absolute;
    left: 4vw;
    top: 48%;
  }

  .title_box>span {
    padding-left: 20px;
    color: #707070;
    font-weight: 900;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7vw;
  }

  .main_main {
    width: 63%;
    margin-left: 37%;
    height: 77vh;
    box-sizing: border-box;
    padding-top: 5vh;
  }

  .main_nav {
    font-weight: 900;
    color: #707070;
    height: 4vh;
  }

  .button {
    border: 0px;
    font-weight: 900;
    padding: 7px 30px;
  }

  .search {
    float: right;
    position: relative;
    width: 20vw;
    height: 4vh;
  }

  .search>input {
    width: 15vw;
    border: 1px solid var(--unnamed-color-d5d5d5);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D5D5D5;
    height: 30px;
    box-sizing: border-box;
    right: 4vw;
  }

  .search>.button {
    border: 1px solid var(--unnamed-color-d5d5d5);
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 0;
    height: 30px;
    line-height: 30px;
    padding: 0;
    right: 0;
    width: 4vw;
  }

  .search>input:required:invalid {
    color: #D5D5D5;
  }

  .main_zhuye {
    width: 100%;
    height: 5.5vh;
    margin-top: 2vh;
  }

  .main_zhuye_titile {
    height: 100%;
    text-align: center;
    line-height: 5.5vh;
    float: left;
    color: #FFFFFF;
    background: #52BF8A 0% 0% no-repeat padding-box;
    overflow: hidden;
    font-weight: 900;
    box-sizing: border-box;
    border-left: .5px solid #FFFFFF;
  }

  .main_zhuye_titile>div {
    float: left;
    width: 16.66%;
  }

  .mian_school {
    width: 100%;
    overflow: hidden;
  }

  .mian_school>.main_zhuye_titile {
    background-color: #FFFFFF;
    color: #707070;
    border-left: 0px;
    border-bottom: 1px solid #ccc;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mian_school:hover {
    border: 2px solid #eee;
    cursor: pointer;
  }

  .mian_fenye {
    width: 100%;
    background-color: #FFFFFF;
    height: 8%;
    text-align: center;
    font-weight: 900;
    letter-spacing: 9px;
    color: #707070;
    line-height: 6vh;
    cursor: pointer;
  }

  .leftTitle {
    width: 19.32vw;
    height: 60vh;
    position: absolute;
    top: 20vh;
  }

  .leftTitle>.title_box {
    position: relative;
    float: none;
    height: 13vh;
    box-shadow: 0 0 0;
    line-height: 20px;
    padding: 10px 15px;
    box-sizing: border-box;
    color: #707070;
  }

  .leftTitle>.title_box:nth-child(2n) {
    margin: 15px auto;
  }

  .leftTitle>.title_box>.title_title {
    text-align: left;
    font-weight: 900;
    height: 20%;
  }

  .leftTitle>.title_box>.title_cen {
    width: 100%;
    height: 80%;
  }

  .leftTitle>.title_box>.title_cen>div {
    width: 60%;
    float: left;
    line-height: 3.5vh;
    padding-top: 2vh;
    text-align: left;
  }
</style>
