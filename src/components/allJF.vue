<template>
  <div>
    <div class="main">
      <div class="main_box">
        <div class="main_main">
          <div class="main_nav">
            <div class="search">
              <input type="text" class="center-y" v-model="search" placeholder="身份证、学号、手机号、姓名">
              <el-button class="button center-y" @click="searchFn">搜 索</el-button>
            </div>
          </div>
          <div class="main_zhuye">
            <div class="main_zhuye_titile" style="width: 8%;">
              姓 名
            </div>
            <div class="main_zhuye_titile" style="width: 15%;">
              学号
            </div>
            <div class="main_zhuye_titile" style="width: 5%;letter-spacing: 0px;">
              金 额
            </div>
            <div class="main_zhuye_titile" style="width: 20%;text-align: left;padding-left: 20px;">
              项目
            </div>
            <div class="main_zhuye_titile" style="width: 10%;">
              时间
            </div>
            <div class="main_zhuye_titile" style="width: 15%;">
              联系手机
            </div>
            <div class="main_zhuye_titile" style="width: 10%;">
              班级
            </div>
            <div class="main_zhuye_titile" style="width: 17%;">
              缴费流水号
            </div>
          </div>
          <div class="mian_school" v-for="(item,i) in serverData.arr"  @click="go('/JFXQ?id='+i)" :key="i">
            <div class="main_zhuye_titile" style="width: 8%;">
              {{item.name}}
            </div>
            <div class="main_zhuye_titile" style="width: 15%;">
              {{item.xh}}
            </div>
            <div class="main_zhuye_titile" style="width: 5%;">
              {{item.money}}
            </div>
            <div class="main_zhuye_titile" style="width: 20%;text-align: left;padding-left: 20px;">
              {{item.title}}
            </div>
            <div class="main_zhuye_titile" style="width: 10%;">
              {{item.time}}
            </div>
            <div class="main_zhuye_titile" style="width: 15%;">
              {{item.tel}}
            </div>
            <div class="main_zhuye_titile" style="width: 10%;">
              {{item.class}}
            </div>
            <div class="main_zhuye_titile" style="width: 17%;">
              {{item.liuS}}
            </div>
          </div>
          <div class="mian_fenye">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
              :page-size="12" layout="prev, pager, next, jumper" :total="serverData.maxPage*12" class="center-y">
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
    components: {
      Info
    },
    data() {
      return {
        currentPage3: 1,
        search:null,
        maxPage:2,
        serverData:{
          maxPage:2,
          arr:[
          ]
        }
      }
    },
    mounted() {
      this.getServerData()
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleRouter() {
        console.log(this.$router.push('xinjianxs'))
      },
      go(e) {
        this.$router.push(e)
      },
      searchFn(){
        this.myAjax('/AJF',{search:this.search},(res)=>{
          this.serverData=res.body.data
        })
      },
      getServerData(){
        this.myAjax('/AJF',{},(res)=>{
          this.serverData=res.body.data
        })
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
  }

  .main_zhuye>.main_zhuye_titile {
    letter-spacing: 9px;
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
