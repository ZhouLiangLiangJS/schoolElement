<template>
  <div class="main">
    <ShowModel
    :title="'危险提示：'"
    :html="`您正在执行“删除本楼”的操作，+将会清空本楼所有学生和班级的住宿信息！！！+ 为确保安全，请输入登录密码确认操作：`"
    quXiao="取 消 返 回"
    queRen="删 除 本 楼"
    ref='sml'
    @canMif="canMif"
    ></ShowModel>
    <div class="navGo" >
      <el-button @click="$router.go(-1)"> 返 回</el-button>
      <el-button style="background-color: #D5D5D5;float: right;" @click="delBL()"> 删 除 本 楼</el-button>
    </div>
    <div class="main_cen">
      <div class="main_cen_one">
        <el-button class="center-y">{{serverData.title}}</el-button>
        <div class="main_cen_one_xian center-y" :style="'height:'+(serverData.arr.length-1)*80+'px'"></div>
        <div class="main_cen_one_hengxian center-y"></div>
      </div>
      <div class="main_cen_one main_cen_two">
        <div class="two_cen center-y">
          <el-button v-for="(item,i) in serverData.arr" :key="i" class="two_button" @click.stop='active0==i?active0=null:active0=i'>
            <div class="center-y leftXian"></div>
            <span>{{item.title}}</span>
            <em class="center-y" v-if="active0==i"></em>
            <div class="roomBox center-y" v-if="active0==i">
              <div class="center-y leftYxian" :style="'height:'+(item.arr.length-1)*60+'px'"></div>
              <el-button class="three_button" v-for="(child,n) in item.arr" :key="n" @click.stop="active1==n?active1=null:active1=n">
                <div class="center-y leftXian"></div>
                <span>{{child.title}}</span>
                <em class="center-y" v-if="active1==n"></em>
                <div class="roomBox center-y" style="width: 25vw;" v-if="active1==n" >
                  <div class="center-y leftYxian" :style="'height:'+(child.arr.length-1)*60+'px'"></div>
                  <el-button class="three_button" v-for="(sun,o) in child.arr" :key="o"  @click.stop="hoverImg=o">
                    <div class="center-y leftXian"></div>
                    <span>{{sun.title}}</span>
                    <img v-if="hoverImg==o" @click="child.arr.splice(o,1)" src="../../static/icon8.jpg" alt="" class="center-y">
                  </el-button>
                </div>
              </el-button>
            </div>
          </el-button>
        </div>
      </div>
    </div>
    <Info></Info>
  </div>
</template>

<script>
  import ShowModel from './showModel.vue'
  import Info from './info'
  export default{
    data(){
      return{
        serverData:{
          title:"一号楼",
          arr:[
            {
              title:"五楼",
              arr:[
                {
                  title:'1-401',
                  arr:[
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    },
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    },
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    },
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    }
                  ]
                },
                {
                  title:'1-401',
                  arr:[
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    }
                  ]
                },{
                  title:'1-401',
                  arr:[
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    },
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    },
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    },
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    }
                  ]
                }
              ]
            },
            {
              title:"五楼",
              arr:[
                {
                  title:'1-401',
                  arr:[
                    {
                      title:"1号上铺 彭东东 民舞2001班"
                    }
                  ]
                }
              ]
            }
          ]
        },
        active0:null,
        active1:null,
        hoverImg:0
      }
    },
    components:{
      Info,
      ShowModel
    },
    methods:{
      delBL(){
        this.$refs.sml.open()
      },
      canMif(e){
        console.log(e)
      },
      move(e){
        console.log(e)
      }
    },
    watch:{
      active(old,newdata){
        console.log(old,newdata)
      }
    }
  }
</script>

<style scoped>
  .main{
    overflow: scroll;
    box-sizing: border-box;
    padding: 5vw;
  }
  .navGo{
    width: 100%;
  }
  .navGo>button{
    border: 0;
    border-radius: 0;
    padding: 0;
    width: 150px;
    line-height: 40px;
    box-shadow: 0px 3px 2px #00000029;
    color: #707070;
    font-weight: 900;
  }
  button{
    border: 0;
    border-radius: 0;
    padding: 0;
    box-shadow: 0px 3px 2px #00000029;
    line-height: 40px;
  }
  .main_cen{
    height: 100%;
  }
  .main_cen_one{
    float: left;
    width: 20%;
    position: relative;
    height: 100%;
    box-sizing: border-box;
  }
  .main_cen_one_xian{
    width: 1px;
    background-color: #ccc;
    right: 0;
  }

  .main_cen_one_hengxian{
    width: 20%;
    height: 1px;
    background-color: #CCCCCC;
    right: 0;
  }

  .main_cen_one>button{
    width: 60%;
    left: 20%;
    line-height: 60px;
  }

  .two_cen{
    width: 60%;
    left: 20%;
  }

  .two_cen>.two_button{
    width: 100%;
    line-height: 60px;
    margin-bottom: 20px;
    margin-left: 0;
    position: relative;
  }
  .two_cen>.two_button:last-child{
    margin-bottom: 0;
  }

  .two_cen>.two_button em,.two_cen>.two_button .leftXian{
    position: absolute;
    width: 33%;
    display: block;
    height: 1px;
    background-color: #CCCCCC;
    right: 0;
    transform: translateX(100%);
  }
  .two_cen>.two_button .leftXian{
    left: 0;
    transform: translateX(-100%);
  }
  .roomBox{
    width: 18vw;
    left: 133%;
  }
  .roomBox>button{
    width: 60%;
    display: block;
    position: relative;
  }
  .roomBox img{
    height: 50%;
    right: -40px;
  }
  .three_button{
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
  }
  .three_button:last-child{
    margin-bottom: 0;
  }
  .three_button>em,.three_button>.leftXian{
    position: absolute;
  }
  .leftYxian{
    width: 1px;
    background-color: #CCCCCC;
    left: 0;
  }
</style>
