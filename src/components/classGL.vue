<template>
  <div class="main">
    <ShowModel
    :title="'重要提示：'"
    :html="`您正在执行“一键分班”的操作，+将会清空当前所有学生已有的分班信息、住宿信 息、物品发放信息+，为确保安全，请输入登录密码确认操作：`"
    quXiao="取 消 返 回"
    queRen="确 认 分 班"
    ref='sml'
    @canMif="canMif"
    ></ShowModel>
    <div class="main_cen center">
      <div class="main_nav">
        <span>当前新生分班方式：自动分班</span>
        <el-button @click="open">对全部新生重新一键分班</el-button>
      </div>
      <div class="cen_lei">
        <div class="cen_button_A">
          报 道 新 生<span style="font-weight: 400;"> (1000000)</span>
          <em class="center-x"></em>
        </div>
        <div class="cen_xian" :style="'width:'+(serverData.ArrC.length)*200+'px;'"></div>
        <div class="cen_fenban_box" :style="'width:'+(serverData.ArrC.length+1)*200+'px;'">
          <div class="cen_fenban" v-for="(item,i) in serverData.ArrC" :key="i">
            <span>{{item.title}}({{item.num}})</span>
            <em class="center-x"></em>
          </div>
          <div class="cen_fenban" style="cursor: pointer;" @click="$router.push('GLXQ')">
            <span>+</span>
            <em class="center-x"></em>
          </div>
        </div>
        <div style="overflow: hidden;">
          <div class="cen_fenban_child" v-for="(item,i) in serverData.ArrC" :key="i">
            <div class="cen_fenban_child_leftX" :style="'height:'+(((item.child.length+1)*60)-20)+'px;'"></div>
            <div class="cen_fenban_child_box" v-for="(child,n) in item.child" :key="n" @click="go('/SetTab')">
              <span>{{child.title}}({{child.num}})</span>
              <em class="center-y"></em>
            </div>
            <div style="cursor: pointer;" class="cen_fenban_child_box" @click="$router.push('GLXQ')">
              <span>+</span>
              <em class="center-y"></em>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Info></Info>
  </div>
</template>

<script>
  import Info from './info';
  import ShowModel from './showModel.vue';
  export default {
    components: {
      Info,
      ShowModel
    },
    data() {
      return {
        serverData: {
          titleNum: 123,
          ArrC: [{
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },

            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },
            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },
            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },
            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      canMif(e){
        console.log(e)
      },
      open(){
        this.$refs.sml.open()
      },
      back() {

      },
      go(e){
        this.$router.push(e)
      },
      addItem() {
        this.$prompt('请输入添加内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '新建成功'
          });
          this.serverData.ArrC.push({
            title: value,
            num: 0,
            child: [

            ]
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      addChild(i) {
        this.$prompt('请输入添加内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({
          value
        }) => {
          this.$message({
            type: 'success',
            message: '新建成功'
          });
          this.serverData.ArrC[i].child.push({
            title: value,
            num: 0
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });

      }
    }
  }
</script>

<style scoped>
  .main {
    overflow: scroll;
    position: relative;
  }
  .main_nav{
    width: 100%;
    line-height: 50px;
    transform: translateY(-100%);
    position: absolute;
    color: #707070;
  }
  .main_nav button{
    float: right;
    border-radius: 0px;
    border: 0px;
    box-shadow: 2px 2px 4px #909193;
  }
  .main_cen {
    background-color: #FFFFFF;
  }

  .cen_lei {
    padding: 50px 30px;
  }

  .cen_button_A {
    background-color: #5c6a7c;
    box-shadow: 0 0 5px #5c6a7c;
    padding: 0 20px;
    color: #FFFFFF;
    line-height: 60px;
    position: relative;
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 200px;
    text-align: center;
    font-size: 16px;
    font-weight: 900;
  }

  .cen_button_A>em {
    position: absolute;
    width: 1px;
    height: 10px;
    background-color: #b4de8a;
    bottom: 0;
    transform: translate(-50%, 120%);
  }

  .cen_xian {
    height: 1px;
    background-color: #b4de8a;
    width: 10px;
    transform: translateY(12px);
    margin: 0 auto;
  }

  .cen_fenban_box {
    margin-top: 24px;
    height: 40px;
  }

  .cen_fenban {
    width: 160px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #52BF8A;
    float: left;
    color: #FFFFFF;
    margin: 0 20px;
    box-shadow: 2px 2px 4px #909193;

    position: relative;
  }

  .cen_fenban>span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  .cen_fenban_child {
    width: 160px;
    float: left;
    margin: 0 20px;
    padding-bottom: 10px;
  }

  .cen_fenban_child_leftX {
    width: 1px;
    background-color: #aaa;
    margin-left: 20px;
    float: left;
  }

  .cen_fenban_child_box {
    width: 140px;
    height: 40px;
    margin-top: 20px;
    background-color: #FFFFFF;
    color: #707070;
    box-shadow: 2px 2px 6px #909193;
    margin-left: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .cen_fenban_child_box>em {
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: #AAAAAA;
    left: -20px;
  }

  .cen_fenban>em {
    position: absolute;
    width: 1px;
    height: 10px;
    background-color: #b4de8a;
    top: 0;
    transform: translate(-50%, -120%);
  }
</style>
