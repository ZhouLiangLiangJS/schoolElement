<template>
  <div>
    <div class="main">
      <div class="main_box center-x">
        <div class="main_left">
          <div>
            <el-button class="button ">保 存</el-button>
            <el-button class="button " style="background-color: #FFFFFF;color: #707070;" @click="back">返 回</el-button>
            <img :src="img" class="toux" alt="">
          </div>
        </div>
        <div class="main_main">
          <div class="main_main_left">
            <div v-for="(item,i) in arr1" :key="i">{{item}}</div>
          </div>
          <div class="main_main_left" style="text-align: left;font-weight: 400;width: 35%;">
            <div style="cursor: pointer;" v-for="(item,i) in arr2" :key="i" @mousemove="mouse=i" @mouseleave="mouse=null">
              <input type="text" v-model="arr2[i]" @blur="xg(i)" v-show="active==i">
              <span v-show='active!=i'>{{item}}</span>
              <span v-show="mouse==i" @click="active==i?active=null:active=i"><img style="width: 15px;" src="../../static/icon12.jpg" alt=""></span>
            </div>
          </div>
          <div class="main_main_left" style="float: right;text-align: left;margin-right: 5%;width: 40%;">
            <div class="myfor" v-for="(item,i) in arr3" :key="i" >
              <div class="title">{{item.title}}</div>
              <div style="font-weight: 400;line-height: 40px;" v-for="(child,n) in item.arr"  :key="n" >{{child}}</div>
            </div>
            <div class="shenhe">
              <div class="shenhe_titile">该生审核结果：</div>
              <div class="shenhe_tab">
                <em  @click="flag=true">
                  <span class="center" v-if="flag"></span>
                </em>
                <span>通过</span>
                <em  @click="flag=false" style="margin-left: 50px;">
                  <span class="center" v-if="!flag"></span>
                </em>
                <span>不通过</span>
              </div>
              <div class="shenhe_titile">审核说明：</div>
              <textarea name="" id="" rows="20"></textarea>
            </div>
          </div>

          <Info></Info>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Info from './info'
  export default {
    components:{
      Info
    },
    data() {
      return {
        flag:false,
        mouse:null,
        active:null,
        arr1: [],
        arr2: [],
        arr3:[],
        img:''
      }
    },
    mounted() {
      this.getServerData()
    },
    methods: {
      back(){
        console.log(this.$router.go(-1))
      },
      getServerData(){
        let id=this.$route.query.id
        this.myAjax('/xinjianxs',{id:id},(res)=>{
          this.img=res.body.data.img
          this.arr1=res.body.data.arr1
          this.arr2=res.body.data.arr2
          this.arr3=res.body.data.arr3
        })
      },
      xg(i){
        this.myAjax('/xinjianxs/xg',{content:this.arr2[i],id:i})
      }
    }
  }
</script>

<style scoped>
  .main {
    overflow-y: scroll;
  }
  .active{
    background-color: #909090;
  }
  .shenhe_tab em{
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid #909090;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .shenhe>textarea{
    width: 60%;
    height: 100px;
    border: 0px;
    resize:none;
  }
  .shenhe_tab em span{
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

  .toux {
    width: 100%;
  }

  .main_main {
    width: 90%;
    float: left;
    box-sizing: border-box;
    padding-bottom: 50px;
  }

  .main_main_left {
    text-align: right;
    width: 20%;
    float: left;
    line-height: 35px;
    font-weight: 900;
    letter-spacing: 0.32px;
    color: #707070;
  }
</style>
