<template>
  <div class="main">
    <div class="send_neir">
      <div class="title">通知内容：</div>
      <textarea class="sendText" placeholder="（文字内容不能超过150个字，不能包括特殊符号）" maxlength="150"></textarea>
    </div>
    <div class="send_neir">
      <div class="title">通知对象：</div>
      <label>
        <input type="radio" name="table" checked>
        <span>全部新生</span>
      </label>
      <label>
        <input type="radio" name="table">
        <span>无</span>
      </label>
      <div class="send_list" v-for="(item,i) in serverData.serverArr" :key="i" >
        <div class="send_list_title" :style="'width:'+((item.title.length*15)+120)+'px'">
          <el-divider  content-position="left" >{{item.title}}</el-divider>
        </div>
        <div class="lb" v-for="(child,n) in  item.arr" :key="n">
          <input type="checkbox" :checked="child.flag">
          <span>{{child.text}}</span>
        </div>
      </div>
      <div class="send_list" >
        <div>预计接受到消息为：{{serverData.num}}人</div>
        <div class="qr">
          <el-button @click="flag=true">发 送 通 知</el-button>
          <el-button style="color: #707070;background-color: #FFFFFF;" >取 消 返 回</el-button>
          <el-button style="color: #707070;background-color: #FFFFFF;float: right;" @click="$router.push('sendLS')">发 送 历 史</el-button>
        </div>
      </div>
    </div>
    <div class="showQRMask" v-if="flag">
      <div class="showQR center-x">
        <div>共{{serverData.num}}人将收到消息，是否发送？</div>
        <div class="qr showQR_btn center-x">
          <el-button @click="send()">发 送</el-button>
          <el-button style="color: #707070;background-color: #FFFFFF;float: right;"  @click="flag=false">取 消</el-button>
        </div>
      </div>
    </div>
    <div class="showQRMask" v-if="success">
      <div class="showQR center-x">
        <div class="success">
          <span>✔</span>
          <span>通知发送成功，共{{serverData.num}}人将收到消息</span>
        </div>
      </div>
    </div>
    <Info></Info>
  </div>
</template>

<script>
  import Info from './info.vue'
  export default {
    components:{
      Info
    },
    data(){
      return{
        flag:false,
        success:false,
        serverData:{
          num:539,
          serverArr:[
          {
            title:"专业",
            arr:[
              {
                text:"畜牧兽医",
                flag:false
              },{
                text:"畜牧兽医",
                flag:false
              },{
                text:"畜牧兽医",
                flag:false
              },{
                text:"畜牧兽医",
                flag:false
              },{
                text:"畜牧兽医",
                flag:false
              },{
                text:"畜牧兽医",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              },{
                text:"汽车运用制作",
                flag:false
              }
            ]
          },
          {
            title:"班级",
            arr:[
              {
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },
              {
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              },{
                text:"民武2011班",
                flag:false
              }
            ]
          },
          {
            title:"附加选项",
            arr:[
              {
                text:"男生",
                flag:false
              },
              {
                text:"女生",
                flag:false
              },
              {
                text:"未完成报道",
                flag:false
              },
              {
                text:"已完成报道",
                flag:false
              }
            ]
          }
        ]
        }
      }
    },
    methods:{
      open(){

      },
      send(){
        this.flag=false;
        this.success=true;
        setTimeout(()=>{
          this.success=false
        },1000)
      }
    }
  }
</script>

<style scoped>
  .main{
    padding: 5%;
    color: #707070;
    overflow-y: scroll;
  }
  .success{
    line-height: 80px;
  }
  .success>span:first-child{
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #52BF8A;
    color: #FFFFFF;
    margin: 0 20px;
    transform: translateY(15%);
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    border-radius: 100%;
  }
  .showQRMask{
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    width: 100vw;
    position: fixed;
    height: 100vh;
  }
  .showQR{
    width: 350px;
    padding:30px;
    position: absolute;
    height: 80px;
    top: 30%;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 2px #00000029;
  }
  .showQR>div{
    font-weight: 900;
  }
  .showQR_btn{
    width: 200px;
    bottom: 10px;
  }
  .showQR_btn>button{
    width: auto;
    padding: 0 20px;
    margin: 0 !important;
  }
  .qr {
    margin-top: 20px;
    padding-bottom: 10px;
  }

  .qr button {
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
  .send_neir{
    margin-bottom: 10px;
    overflow: hidden;
    padding: 30px 10px 0 0;
  }
  .title{
    width: 100px;
    float: left;
    font-weight: 900;
    height: 100%;
  }
  .sendText{
    float: left;
    width: calc(100% - 100px);
    box-sizing: border-box;
    border: 0;
    padding: 20px;
    height: 100px;
    transform: translateY(-20px);
  }
  .send_neir label{
    margin-right: 30px;
  }
  .send_list{
    width: calc(100% - 100px);
    margin-left: 100px;
    overflow: hidden;
  }
  .el-divider__text{
    background-color: #F5F5F5;
    color: #707070;
  }
  .el-divider{
    background-color: #707070;
  }
  .el-divider__text.is-left{
    left: 40px;
  }
  .send_list_title{

  }
  .lb{
    width: 100px;
    margin-bottom: 20px;
    float: left;
    margin-right: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
