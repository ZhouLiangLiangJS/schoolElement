<template>
  <div class="main">
    <div class="back">
      <el-button @click="$router.go(-1)">返 回</el-button>
    </div>
    <div class="title">
      <span>民武2011班宿舍</span>
      <div class="search">
        <input type="text" class="center-y" placeholder="">
        <el-button class="button center-y">搜 索</el-button>
      </div>
    </div>
    <div class="main_cen">
      <div class="main_left " >
          <div class="main_title">男生宿舍</div>
        <div v-for="(item,i) in serverData.sex1" :key="i">
          <div class="main_btn">
            <div class="btn_title">1-401</div>
            <div class="topBottom">
              <span>上铺</span>
              <span style="bottom: 20px;top: auto;">下铺</span>
            </div>
            <div class="main_child">
              <div v-for="(child,n) in item.arr" :key="n">
                <span class="center-x" style="top: 20px;">{{child.top}}</span>
                <div class="center">{{n+1}}</div>
                <span class="center-x">{{child.bottom}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_right ">
          <div class="main_title">女生宿舍</div>
        <div  v-for="(item,i) in serverData.sex0" :key="i">
          <div class="main_btn">
            <div class="btn_title">1-401</div>
            <div class="topBottom">
              <span>上铺</span>
              <span style="bottom: 20px;top: auto;">下铺</span>
            </div>
            <div class="main_child">
              <div v-for="(child,n) in item.arr" :key="n">
                <span class="center-x" style="top: 20px;">{{child.top}}</span>
                <div class="center">{{n+1}}</div>
                <span class="center-x">{{child.bottom}}</span>
              </div>
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
    components: {
      Info
    },
    data() {
      return {
        serverData: {
          sex0: [
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            },
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            },
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            },
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            }
          ],
          sex1: [
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            },
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            },
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            },
            {
              title: '1-401',
              arr: [
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                },
                {
                  top: "张飞",
                  bottom: "吕布"
                }
              ]
            }
          ]
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .main {
    padding: 5% 8%;
    box-sizing: border-box;
    color: #707070;
  }

  .main_child{
    width: 75%;
    height: 100%;
  }

  .main_child>div{
    float: left;
    width: 25%;
    height: 100%;
    text-align: center;
    position: relative;
  }
  .main_child>div>.center{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #D5D5D5;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
  }
  .main_child>div>span{
    position: absolute;
    bottom: 20px;
  }

  .main_btn>div {
    float: left;
  }

  .btn_title {
    width: 20%;
    line-height: 100px;
    text-align: center;
    font-weight: 900;
  }

  .topBottom {
    width: 5%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
  }

  .topBottom>span {
    font-weight: 900;
    position: absolute;
    top: 20px;
  }

  .main_cen {
    width: 100%;
    overflow: hidden;
  }

  .main_cen>div {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding-bottom: 50px;
  }

  .main_title {}

  .main_btn {
    width: 100%;
    margin-top: 30px;
    height: 100px;
    box-shadow: 0px 3px 2px #00000029;
    background-color: #FFFFFF;
  }

  .main_left {
    padding-right: 5%;
    border-right: 1px solid #CCCCCC;
  }

  .main_right {
    padding-left: 5%;
  }

  .back button {
    border: 0;
    border-radius: 0;
    padding: 0;
    width: 150px;
    line-height: 40px;
    box-shadow: 0px 3px 2px #00000029;
    color: #707070;
    font-weight: 900;
  }

  .title {
    line-height: 50px;
    font-weight: 900;
    color: #707070;
  }

  .title .search {}

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
</style>
