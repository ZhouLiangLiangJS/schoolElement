<template>
  <div>
    <div class="main">
      <div class="main_box">
        <div class="title">
          <div class="title_box">
            <img src="../../static/icon5.jpg" class="center-y" alt="">
            <span>75 名</span>
          </div>
          <div class="title_box center">
            <img src="../../static/icon6.jpg" class="center-y" alt="">
            <span>75 名</span>
          </div>
          <div class="title_box" style="right: 0;">
            <img src="../../static/icon7.jpg" class="center-y" alt="">
            <span>75 名</span>
          </div>
        </div>
        <div class="main_main">
          <div class="main_nav">
            <span>教师一览表：</span>
            <el-button class="button">添加教师信息</el-button>
            <el-button class="button">导入教师信息</el-button>
            <span style="font-weight: 400;">（下载导入模版）</span>
            <div class="search">
              <input type="text" class="center-y" placeholder="身份证、学号、手机号、姓名">
              <el-button class="button center-y">搜 索</el-button>
            </div>
          </div>
          <div class="main_zhuye" >
            <div class="main_zhuye_titile" style="
              width: 10%;
          ">
              姓 名
            </div>
            <div class="main_zhuye_titile" style="
              width: 8%;
          ">
              性别
            </div>
            <div class="main_zhuye_titile" style="
              width: 15%;
          ">
              职工号
            </div>
            <div class="main_zhuye_titile" style="
              width: 15%;
          ">
              电话号码
            </div>
            <div class="main_zhuye_titile" style="
              width: 15%;
          ">
              部门
            </div>
            <div class="main_zhuye_titile" style="
                width: 37%;
            ">
              负责流程
            </div>
          </div>
          <div class="mian_school" v-for="i in 10" :key="i" @click="handleRouter">
            <div class="main_zhuye_titile" style="
                width: 10%;
            ">
              聂辛庄
            </div>
            <div class="main_zhuye_titile" style="
                width: 8%;
            ">
              男
            </div>
            <div class="main_zhuye_titile" style="
                width: 15%;
            ">
              130921200212305612
            </div>
            <div class="main_zhuye_titile" style="
                width: 15%;
            ">
              15139225822
            </div>
            <div class="main_zhuye_titile" style="
                width: 15%;
            ">
              民族武术
            </div>
            <div class="main_zhuye_titile" style="
                  width: 37%;
              ">
              招就处
            </div>
          </div>
          <div class="mian_fenye">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
              :page-size="100" layout="prev, pager, next, jumper" :total="1000" class="center-y">
            </el-pagination>
            <!-- <el-pagination
                layout="prev, pager, next"
                :total="500"
                class="center-y"
                :jumper="jumper"
                >
              </el-pagination>
              <div class="jup center-y">
                <input type="number" v-model="Gonum">
                <el-button class="jup_btn" @tap="jumper=Gonum">Go</el-button>
              </div> -->
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
        currentPage3: 5
      }
    },
    components: {
      Info
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleRouter() {
        console.log(this.$router.push('/createTeacher'))
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
    width: 100%;
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
    padding: 7px 20px;
    border-radius: 0px;
    box-shadow: 0px 3px 2px #00000029;
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
    box-shadow: 0px 0px 0px #00000029;
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
    position: relative;
  }

  .mian_fenye>.center-y {
    padding-left: 2vw;
  }
</style>
