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
              <div>专业群名：</div>
              <div>负责老师：</div>
              <div>下辖专业：</div>
            </div>
            <div class="main_cen_right">
              <div>{{serverData.title}}</div>
              <div>
                <el-dropdown @command="handleCommand" trigger="click" style="padding: 0px 10px;border: 1px solid #ddd;width: 80px;background-color: #fff;position: relative;cursor: pointer;line-height: 25px;">
                  <span class="el-dropdown-link">
                    {{serverData.laoshi}}<i class="el-icon-arrow-down el-icon--right center-y" style="right: 10px;"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" style="width:120px;">
                    <el-dropdown-item :command="i" v-for="(item,i) in serverData.laoshiArr" :key="i" :disabled="serverData.laoshi==item">{{item}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div v-for="(item,i) in serverData.xiazhi">
                <span style="margin-right: 30px;">{{item.title}}</span>
                <span>专业代码{{item.daiMa}}</span>
                <img @click="serverData.xiazhi.splice(i,1)" src="../../static/icon8.jpg" class="center-y" alt="">
              </div>
              <span class="dx" @click="open(1)">+</span>
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
          title: "民族武术",
          laoshi: "陈胜民",
          xiazhi: [{
              title: "民武",
              daiMa: 2010
            },
            {
              title: "套路",
              daiMa: 8610
            }
          ],
          laoshiArr: [
            "陈胜民",
            "张三"
          ]
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
        let obj={
              title:'',
              daiMa:''
            }
        this.$prompt('请输入下辖专业', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({
          value
        }) => {

           obj.title=value

          this.$prompt('请输入专业代码', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({
            value
          }) => {
            this.$message({
              type: 'success',
              message: '添加成功'
            });
            obj.daiMa=value
            this.serverData.xiazhi.push(obj)

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      handleCommand(e) {
        this.serverData.laoshi = this.serverData.laoshiArr[e]
      }
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
    width: 80px;
    text-align: right;
    float: left;
    line-height: 40px;
  }

  .main_cen_right {
    float: left;
    line-height: 40px;
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
