<template>
  <div>
    <div class="main">
      <div class="main_box center-x">
        <div class="main_left">
          <div>
            <el-button class="button " style="background-color: #FFFFFF;color: #707070;" @click="back">返 回</el-button>
          </div>
        </div>
        <div class="main_main">
          <div class="main_cen">

            <div class="main_cen_left">
              <div>发送时间：</div>
              <div :style="'height:'+conentHeight+'px;'">通知内容：</div>
              <div>通知对象：</div>
              <div>附加选项：</div>
              <div>通知人数：</div>
              <div>发送结果：</div>
            </div>
            <div class="main_cen_right">
              <div>{{serverData.time}}</div>
              <div ref="conent">{{serverData.conent}}</div>
              <div>{{serverData.spce}}</div>
              <div>{{serverData.class}}</div>
              <div>{{serverData.num}}</div>
              <div>{{serverData.success}}</div>
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
        conentHeight:40,
        serverData: {}
      }
    },
    components: {
      Info
    },
    mounted() {
      this.getServerData()
    },
    methods: {
      back() {
        console.log(this.$router.go(-1))
      },
      open(e) {
        let str=e?'请输入部门':'请输入负责流程';
        this.$prompt(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '修改内容为：'+value
          });
          if(e){
            this.serverData.buMen=value
          }else{
            this.serverData.liuC=value
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      getServerData(){
        this.myAjax('/TZXQ',null,(res)=>{
          this.serverData=res.body.data;

        })
      }
    },
    watch:{
      serverData(){
        console.log(11)
        setTimeout(()=>{
          this.conentHeight=this.$refs.conent.offsetHeight;
        },100)
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
    font-weight: 900;
  }

  .main_cen_right {
    width: calc(100% - 100px);
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
    padding: 0 20px;
    cursor: pointer;
  }
</style>
