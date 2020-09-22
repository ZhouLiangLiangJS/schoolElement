<template>
  <div>
    <div class="main">
      <div class="main_box center-x">
        <div class="main_left">
          <div>
            <el-button class="button ">保 存</el-button>
            <el-button class="button " style="background-color: #FFFFFF;color: #707070;" @click="back">返 回</el-button>
          </div>
        </div>
        <div class="main_main">
          <div class="main_cen">
            <div class="main_cen_left">
              <div class="main_cen_title">添加宿舍楼 &nbsp;&nbsp;</div>
              <div>宿舍楼名称：</div>
              <div>宿舍楼层数：</div>
              <div>每层宿舍数：</div>
              <div>每宿舍床数：</div>
              <div>男女生类别：</div>
            </div>
            <div class="main_cen_right">
              <div>&nbsp;</div>
              <div>
                <input type="text">
              </div>
              <div>
                <input type="text">
              </div>
              <div>
                <input type="text">
              </div>
              <div>
                <input type="text">
              </div>
              <div>
                <input type="radio" name="drone" checked>男
                <input type="radio" name="drone">女
              </div>
            </div>
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
    data() {
      return {
        serverData: {

        }
      }
    },
    components: {
      Info
    },
    methods: {
      back() {
        console.log(this.$router.go(-1))
      },
      open(e) {

      },
    }
  }
</script>

<style scoped>
  .main {
    overflow-y: scroll;
  }

  .active {
    background-color: #909090;
  }

  .shenhe_tab em {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid #909090;
    display: inline-block;
    position: relative;
  }

  .shenhe>textarea {
    width: 60%;
    height: 100px;
    border: 0px;
    resize: none;
  }

  .shenhe_tab em span {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #909090;
    border-radius: 100%;
  }

  .main_box {
    width: 90%;
    position: absolute;
    top: 10vh;
    margin-left: 5%;
  }

  .button {
    background: #52BF8A 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 2px #00000029;
    width: 100%;
    border: 0px;
    margin: 0 0 30px;
    border-radius: 0px;
    color: #FFFFFF;
    font-weight: 900;
    box-sizing: border-box;
  }

  .main_left {
    width: 10%;
    float: left;
  }

  .main_left>div {
    width: 100%;
  }

  .main_main {
    width: 90%;
    padding-left: 1%;
    float: left;
    box-sizing: border-box;
    color: #707070;
  }

  .main_main>.title {
    font-weight: 900;
    font-size: 30px;
  }

  .main_cen {
    width: 80%;
    padding: 0 5%;
  }

  .main_cen_left {
    width: 100px;
    text-align: right;
    float: left;
    line-height: 40px;
  }
  .main_cen_left>.main_cen_title{
    font-weight: 900;
  }

  .main_cen_right {
    float: left;
    line-height: 40px;
  }

  .main_cen_right input{
    border: 0;
    border-bottom: 1px solid #ccc;
    background-color: rgba(0,0,0,0);
  }

  .main_cen_right>div {
    position: relative;
  }

  .main_cen_right img {
    position: absolute;
    height: 20px;
    padding-left: 10px;
    cursor: pointer;
  }

  .main_cen_right .dx {
    border: 1px dashed #707070;
    width: 150px;
    display: block;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
  }
</style>
