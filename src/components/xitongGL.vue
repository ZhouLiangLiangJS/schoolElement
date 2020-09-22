<template>
  <div class="main">

    <div class="main_left">
      <div class="title">参数设置</div>
      <div class="fenBanCS">
        <p>分班参数</p>
        <div>
          <span>新生分班方式：</span>
          <label>
            <input type="radio" name="fenlei">
            自动分班
          </label>
          <label>
            <input type="radio" name="fenlei">
            手工分班
          </label>
        </div>
        <div>
          <span>班级标准人数：</span>
          <input type="text">
          <span>人</span>
          <span>班级最低人数：</span>
          <input type="text">
          <span>人</span>
        </div>
      </div>
      <div class="fenBanCS">
        <p>学号参数</p>
        <div>
          <span>班级之间学号间隔：</span>
          <input type="text">
          <span>个学号</span>
        </div>
      </div>
      <el-button style="position: absolute;bottom: 30px;">保 存 参 数</el-button>
    </div>
    <div class="main_right">
      <div>
        <div class="title">新生数据导入导出</div>
        <div>
          当前系统数据有1075位新生的全部个人及报到数据
        </div>
        <div>
          <el-button style="background-color: #FFFFFF;color: #707070;"  @click="open('导入覆盖')">导 入 覆 盖</el-button>
        </div>
        <div>
          <el-button>开 始 导 出</el-button>
        </div>
      </div>
      <div>
        <div class="title">宿舍数据导出</div>
        <div>
          当前系统数据有1075位新生，158间宿舍，1216个床位
        </div>
        <div>
          <el-button>开 始 导 出</el-button>
        </div>
      </div>
      <div>
        <div class="title">数据库备份</div>
        <div>
          当前系统有27个备份，可以选择 一个备份还原，也可再备份
        </div>
        <div>
          <el-button style="background-color: #FFFFFF;font-weight: 400;box-shadow: 0 0 0 0;border: 1px solid #CCCCCC;padding: 0 10px;">
            <el-dropdown>
              <span class="el-dropdown-link">
                2020-9-17 16:38:03<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>2020-9-17 16:38:03</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-button>
        </div>
        <div>
          <el-button style="background-color: #FFFFFF;color: #707070;" @click="open('恢复备份')">恢 复 备 份</el-button>
        </div>
        <div>
          <el-button>开 始 导 出</el-button>
        </div>
      </div>
      <div>
        <div class="title">重置系统</div>
        <div>
          重置系统到初始状态，清空所 有数据和设置
        </div>
        <div>
          <el-button>重 置 系 统</el-button>
        </div>
      </div>
    </div>

    <ShowModel
    :title="'危险提示：'"
    :html="'危险提示： 您正在执行“'+text+'”的操作，该操作+将会覆盖系统当前的数据！！！+为确保安全，请输入登录密码确认操作（建议先备份当前数据库）：'"
    quXiao="取 消 返 回"
    queRen="重 置 系 统"
    ref='sml'
    @canMif="canMif"
    ></ShowModel>
    <Info></Info>
  </div>
</template>

<script>
  import Info from './info.vue';
  import ShowModel from './showModel.vue'
  export default{
    data(){
      return{
        text:'导入覆盖'
      }
    },
    components:{
      Info,
      ShowModel
    },
    methods:{
      canMif(e){
        console.log(e)
      },
      open(e){
        this.text=e;
        this.$refs.sml.open()
      }
    }
  }
</script>

<style scoped>
  .main{
    padding: 2.6% 5%;
    color: #707070;
  }
  button{
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
  .main_left{
    width: 75%;
    height: 100%;
    background-color: #FFFFFF;
    float: left;
    box-sizing: border-box;
    padding: 30px;
    position: relative;
  }
  .fenBanCS{
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    border: 1px solid #CCCCCC;
    position: relative;
    margin-top: 30px;
  }
  .fenBanCS>div{
    margin-bottom: 20px;
  }
  .fenBanCS>div:last-child{
    margin: 0;
  }
  .fenBanCS>p{
    position: absolute;
    top: 0;
    background-color: #FFFFFF;
    display: inline-block;
    transform: translateY(-50%);
    margin: 0;
    padding: 0 10px;
  }
  .fenBanCS input{
    width: 30px;
    border: 0;
    border-bottom: 1px solid #ccc;
  }
  .main_right{
    width: 20%;
    height: 100%;
    float: right;
  }
  .main_right>div{
    width: 100%;
    box-sizing: border-box;
    padding:15px 30px;
    background-color: #FFFFFF;
    margin-bottom: 3.33333%;
  }
  .main_right>div>div{
    margin-bottom: 10px;
  }
  .title{
    font-weight: 900;
  }
</style>
