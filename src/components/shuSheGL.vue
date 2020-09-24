<template>
  <div class="main">
    <div class="SSclass">
      <div class="title">班级宿舍管理：</div>
      <div class="SSmain">
        <el-button v-for="(item,i) in serverData.classShuShe" @click="$router.push('SSXQ')">{{item.title}}</el-button>
      </div>
    </div>
    <div class="SSclass">
      <div class="title">宿舍房间号管理：</div>
      <div class="search">
        <input type="text" placeholder="请输入房间号">
        <el-button>搜 索</el-button>
      </div>
      <div class="sex">
        <div class="sex1">
          <div class="sex1Text">男生宿舍</div>
          <div class="button " v-for="(item,i) in serverData.shushehao.sex1" :key="i">
            <el-button @click="handleRouter('setSS')">{{item.title}}</el-button>
          </div>
          <div class="button ">
            <el-button @click="open(serverData.shushehao.sex1)">+</el-button>
          </div>
        </div>
        <div class="sex0">
          <div class="sex1Text">女生宿舍</div>
          <div class="button " v-for="(item,i) in serverData.shushehao.sex0" :key="i">
            <el-button @click="handleRouter('setSS')">{{item.title}}</el-button>
          </div>
          <div class="button ">
            <el-button @click="open(serverData.shushehao.sex0)">+</el-button>
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
        currentPage3: 5,
        serverData: {
          classShuShe: [],
          shushehao: {
            sex0: [],
            sex1: []
          }
        }
      }
    },
    created() {
      this.getServerData()
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleRouter(e) {
        this.$router.push(e)
      },
      open(e) {
        // this.$prompt('请输入宿舍楼', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        // }).then(({
        //   value
        // }) => {
        //   this.$message({
        //     type: 'success',
        //     message: '新建成功'
        //   });
        //   e.push({
        //     id:e[e.length-1].id+1,
        //     title:value
        //   })
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '取消输入'
        //   });
        // });

        this.$router.push('createSS')
      },
      getServerData() {
        this.myAjax('/SSGL', null, (res) => {
          this.serverData = res.body.data
        })
      }
    }
  }
</script>

<style scoped>
  .main {
    padding: 5%;
    box-sizing: border-box;
    overflow: scroll;
  }

  .sex {
    width: 100%;
    margin-top: 30px;
  }

  .sex0 {
    border-left: 1px solid #D5D5D5;

  }

  .sex1Text {
    position: absolute;
    left: 15%;
  }

  .sex>div {
    float: left;
    width: 50%;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
    padding-bottom: 50px;
  }

  .button {
    width: 40%;
    margin: 0 auto 30px;
  }

  .button>button {
    width: 100%;
    padding: 0;
    border-radius: 0;
    border: 0;
    line-height: 50px;
    box-shadow: 0px 3px 6px #00000029;
  }

  .SSmain {
    margin: 10px auto 30px;
  }

  .SSmain>button {
    width: 150px;
    border: 0px;
    border-radius: 0;
    padding: 0;
    line-height: 35px;
    box-shadow: 0px 3px 2px #00000029;
    margin: 0;
    margin-right: 10px;
    margin-bottom: 15px;

  }

  .SSclass {
    color: #707070;
    position: relative;
  }

  .title {
    font-weight: 900;
    line-height: 35px;
    font-size: 16px;
  }

  .search {
    position: absolute;
    width: 300px;
    height: 35px;
    border: 1px solid #D5D5D5;
    top: 0;
    left: 130px;
  }

  .search>input {
    border: 0px;
    width: 70%;
    float: left;
    height: 100%;
    padding: 0;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .search>button {
    float: left;
    width: 30%;
    height: 100%;
    padding: 0;
    border: 0px;
    border-radius: 0;
    border-left: 1px solid #D5D5D5;
    font-weight: 900;
    background-color: #F5F5F5;
  }
</style>
