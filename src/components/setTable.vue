<template>
  <div>
    <div class="main">
      <div class="main_box">
        <div class="main_main">
          <div class="title_nav">
            <el-button class="back">返 回</el-button>
            <div class="title_title">{{active.title}} <img class="center-y" src="../../static/icon12.jpg" alt=""></div>
            <div class="fenpei">
              <div>
                <span style="margin-right: 60px;" v-for="(item,i) in banMain.ban">{{item}}</span>
              </div>
              <div style="position: relative;">
                <div style="float: left;">
                  宿舍房间号：
                </div>
                <div style="float: left;position: absolute;left: 100px;">
                  <div>（男）<span v-for="(item,i) in banMain.room.sex1">{{item}}{{(i+1)==banMain.room.sex1.length?'':'，'}}
                    </span></div>
                  <div>（女）<span v-for="(item,i) in banMain.room.sex0">{{item}}{{(i+1)==banMain.room.sex0.length?'':'，'}}
                    </span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="main_nav">
            <span>报名新生一览表：</span>
            <el-dropdown @command="handleCommand" trigger="click">
              <span class="el-dropdown-link">
                {{active.title}}<i class="el-icon-arrow-down el-icon--right center-y"></i>
              </span>
              <el-dropdown-menu slot="dropdown" style="width:120px;">
                <el-dropdown-item :command="i" v-for="(item,i) in serverData" :disabled="item.id==active.id">{{item.title}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="search">
              <input type="text" class="center-y" placeholder="身份证、学号、手机号、姓名">
              <el-button class="button center-y">搜 索</el-button>
            </div>
          </div>
          <div class="main_zhuye">
            <div class="main_zhuye_titile" style="
              width: 8%;
          ">
              姓 名
            </div>
            <div class="main_zhuye_titile" style="
              width: 4%;
          ">
              性别
            </div>
            <div class="main_zhuye_titile" style="
              width: 4%;
          ">
              年龄
            </div>
            <div class="main_zhuye_titile" style="
              width: 8%;
          ">
              中考分数
            </div>
            <div class="main_zhuye_titile" style="
              width: 9%;
          ">
              当前班级
            </div>
            <div class="main_zhuye_titile" style="
              width: 5%;
          ">
              生源
            </div>
            <div class="main_zhuye_titile" style="
              width: 5%;
          ">
              学制
            </div>
            <div class="main_zhuye_titile" style="
              width: 5%;
          ">
              家庭
            </div>
            <div class="main_zhuye_titile" style="
              width: 10%;
          ">
              毕业院校
            </div>
            <div class="main_zhuye_titile" style="
              width: 6%;
          ">
              招生老师
            </div>
            <div class="main_zhuye_titile" style="
              width: 36%;
          ">
              <div>
                审核
              </div>
              <div>
                缴费
              </div>
              <div>
                分班
              </div>
              <div>
                测评
              </div>
              <div>
                选床
              </div>
              <div>
                物品
              </div>
            </div>
          </div>
          <div class="mian_school" v-for="i in 10" @click="handleRouter">
            <div class="main_zhuye_titile" style="
                width: 8%;
            ">
              彭冻革
            </div>
            <div class="main_zhuye_titile" style="
                width: 4%;
            ">
              男
            </div>
            <div class="main_zhuye_titile" style="
                width: 4%;
            ">
              15
            </div>
            <div class="main_zhuye_titile" style="
                width: 8%;
            ">
              148
            </div>
            <div class="main_zhuye_titile" style="
                width: 9%;
            ">
              木叶
            </div>
            <div class="main_zhuye_titile" style="
                width: 5%;
            ">
              应届生
            </div>
            <div class="main_zhuye_titile" style="
                width: 5%;
            ">
              3+2
            </div>
            <div class="main_zhuye_titile" style="
                width: 5%;
            ">
              农业
            </div>
            <div class="main_zhuye_titile" style="
                width: 10%;
            ">
              省重点高中
            </div>
            <div class="main_zhuye_titile" style="
                width: 6%;
            ">
              谢大海
            </div>
            <div class="main_zhuye_titile" style="
                width: 36%;
            ">
              <div>
                ●
              </div>
              <div>
                ●
              </div>
              <div>
                ●
              </div>
              <div>
                ○
              </div>
              <div>
                ○
              </div>
              <div>
                ○
              </div>
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
      <div class="mask">
        <div class="showModel center">
          <div class="showModel_top ">
            <div class="show_div">选择新生</div>
            <div class="search">
              <input type="text" class="center-y" placeholder="身份证、学号、手机号、姓名">
              <el-button class="button center-y">搜 索</el-button>
            </div>
            <div class="anniu">
              <el-button style="margin-right: 30px;background-color:  #52BF8A;color: #FFFFFF;">保 存</el-button>
              <el-button>取 消</el-button>
            </div>
          </div>
          <div class="mainshow">
            <div class="mainshow_title">
              <div style="width: 10%;">姓 名</div>
              <div style="
                width: 10%;
            ">性别</div>
              <div style="
                width: 25%;
            ">身份证号</div>
              <div style="
                width: 15%;
            ">电话号码</div>
              <div style="
                width: 15%;
            ">选报专业</div>
              <div style="
                width: 10%;
            ">招生老师</div>
              <div style="
                width: 15%;
            ">分班情况</div>
            </div>
            <div class="mainshow_title mainshow_main" v-for="(item,i) in XSData">
              <div style="width: 10%;">{{item.name}}</div>
              <div style="
                width: 10%;
            ">{{item.sex}}</div>
              <div style="
                width: 25%;
            ">{{item.sfz}}</div>
              <div style="
                width: 15%;
            ">{{item.tel}}</div>
              <div style="
                width: 15%;
            ">{{item.zy}}</div>
              <div style="
                width: 10%;
            ">{{item.zsls}}</div>
              <div style="
                width: 15%;
            ">
              <span class="xianze">{{item.leix}}
              <i class="el-icon-arrow-down el-icon--right" style="color: #FFFFFF;"></i></span>
              <div class="tanchu center-x">
                <span>123123</span>
              </div>
            </div>
            </div>
          </div>

          <div style="padding-left: 10px;color: #707070;">（只显示前5个搜索结果）</div>
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
        currentPage3: 5,
        serverData: [{
          title: '民武2001',
          id: 1
        }, {
          title: '民武2002',
          id: 2
        }, {
          title: '民武2003',
          id: 3
        }, {
          title: '民武2004',
          id: 4
        }],
        active: {
          title: '民武2001',
          id: 1
        },
        XSData:[
          {
            name:'彭冻革',
            sex:'男',
            sfz:'610822200905213230',
            tel:'15227579113',
            zy:'畜牧兽医',
            zsls:'彭万里',
            leix:'未分班'
          },
          {
            name:'彭冻革',
            sex:'男',
            sfz:'610822200905213230',
            tel:'15227579113',
            zy:'畜牧兽医',
            zsls:'彭万里',
            leix:'未分班'
          },
          {
            name:'彭冻革',
            sex:'男',
            sfz:'610822200905213230',
            tel:'15227579113',
            zy:'畜牧兽医',
            zsls:'彭万里',
            leix:'未分班'
          },
          {
            name:'彭冻革',
            sex:'男',
            sfz:'610822200905213230',
            tel:'15227579113',
            zy:'畜牧兽医',
            zsls:'彭万里',
            leix:'未分班'
          },
          {
            name:'彭冻革',
            sex:'男',
            sfz:'610822200905213230',
            tel:'15227579113',
            zy:'畜牧兽医',
            zsls:'彭万里',
            leix:'未分班'
          }
        ],
        banMain: {
          ban: [
            '班主任:陈怀安',
            '班级人数:20人',
            '所属专业:民族武术'
          ],
          room: {
            sex0: [
              '2-402', '2-402', '2-402', '2-402', '2-402', '2-402', '2-402', '2-402', '2-402', '2-402'
            ],
            sex1: ['2-402', '2-402', '2-402', '2-402', '2-402', '2-402', '2-402', '2-402']
          }
        }
      }
    },
    methods: {
      handleCommand(e) {
        this.active = this.serverData[e]
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleRouter() {
        console.log(this.$router.push('xinjianxs'))
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

  .mainshow {
    overflow: hidden;
    background-color: #52BF8A;
    color: #FFFFFF;
    margin-top: 10px;
  }

  .mainshow_title {
    width: 100%;
    height: 50px;
    line-height: 50px;
  }

  .mainshow_title>div {
    float: left;
    text-align: center;
    box-sizing: border-box;
    border-left:1px solid #FFFFFF ;
    position: relative;
  }

  .tanchu{
    border: 1px solid #D5D5D5;
    width: 80px;
    top: 38px;
  }
  .showModel {
    box-shadow: 0px 3px 10px #00000029;
    width: 50vw;
    line-height: 35px;
    background-color: #FFFFFF;
    padding: 20px;
  }

  .mainshow_main{
    border-bottom:1px solid #eee ;
    background-color: #FFFFFF;
    color: #707070;
  }

  .mainshow_main .xianze:hover{
    border: 1px solid #D5D5D5;
    background-color: #FFFFFF;
    display: inline-block;
    line-height: 25px;
    cursor: pointer;
    width: 80px;
  }

  .mainshow_main .xianze:hover .el-icon--right{
    color: #707070 !important;

  }


  .showModel_top {
    overflow: hidden;
    padding-top: 10px;
  }

  .showModel_top>.search {
    float: left;
  }

  .show_div {
    float: left;
    font-weight: 900;
    color: #707070;
  }

  .anniu {
    float: right;
  }

  .anniu>button {
    border: 0px;
    padding: 0px;
    width: 120px;
    line-height: 30px;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 0px;
  }

  .mask {
    width: 84.91vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 15.09vw;
    background-color: rgba(0, 0, 0, 0);
  }

  .back {
    width: 120px;
    box-shadow: 0px 3px 2px #00000029;
    line-height: 40px;
    text-align: center;
    padding: 0;
    border: 0px;
    border-radius: 0px;
    position: absolute;
    font-weight: 900;
  }

  .title_nav {
    width: 100%;
    height: 100px;
    margin-top: 50px;
  }

  .title_title {
    position: absolute;
    left: 180px;
    font-weight: 900;
    color: #707070;
    font-size: 25px;
  }

  .title_title>img {
    position: absolute;
    height: 20px;
    cursor: pointer;
    padding-left: 20px;
  }

  .fenpei {
    width: 50vw;
    height: 100%;
    margin-left: 400px;
    color: #707070;
  }

  .fenpei div {
    line-height: 25px;
  }

  .el-dropdown-link {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  .el-dropdown {
    cursor: pointer;
    width: 150px;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
    line-height: 3vh;
    font-weight: 400;
    border: 1px solid #d5d5d5;

  }

  .el-icon--right {
    right: 20px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
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
  }

  .main_nav {
    font-weight: 900;
    color: #707070;
    height: 4vh;
    line-height: 4vh;
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
    margin-top: .2vh;
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
    border: 2px solid #3dfff9;
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
