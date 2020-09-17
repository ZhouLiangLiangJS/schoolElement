<template>
  <div>
    <div class="main">
      <div class="main_box center-x">
        <div class="main_left">
          <div>
            <el-button class="button ">保 存</el-button>
            <el-button class="button " style="background-color: #FFFFFF;color: #707070;" @click="back">返 回</el-button>
            <img src="../../static/touxiang.png" class="toux" alt="">
          </div>
        </div>
        <div class="main_main">
          <div class="main_main_left">
            <div v-for="(item,i) in arr1" :key="i">{{item}}</div>
          </div>
          <div class="main_main_left" style="text-align: left;font-weight: 400;width: 35%;">
            <div v-for="(item,i) in arr2" :key="i">{{item}}</div>
          </div>
          <div class="main_main_left" style="float: right;text-align: left;margin-right: 5%;width: 40%;">
            <div class="myfor" v-for="(item,i) in arr3" :key="i">
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
        arr1: ["姓名： ", " 申报专业： ", "身份证号： ", "学号： ", "性别： ", "民族： ", "个人联系电话： ", "QQ： ", "政治面貌： ", "文化程度： ", "身高： ",
          "体重： ", "籍贯： ",
          "毕业学校： ", "毕业时间： ", "入学分数： ", "现居住地址： ", "第一监护人电话： ", "第二监护人电话： ", "第三监护人电话： ", "家庭住址： ", "家庭类型： ",
          "学生类别： ",
          "是否本市户籍： ", "是否连片贫困： ", "是否残疾： ", "是否孤儿： ", "是否低保： ", "培养层次： ", "班级： ", "学制： ", "招生学期： ", "推荐人： ",
          "推荐人电话： ",
          "通知书领取方式： ", "报名时间： "
        ],
        arr2: [
          "宁成美", "民族武术", "130921200212305612", "308201309092700188", "男", "汉", "15139225822", "894381734", "团员",
          "初中毕业", "168", "53", "河北省沧县", "沧县中学", "2020年6月", "317", "河北省沧州市沧县纸房头乡周", "18733281590", "13343812593",
          "18934728981", "河北省沧州市沧县纸房头乡周", "农业", "应届", "是", "否", "否", "否", "是", "小中专 ", "（未分班）", "三年", "秋季", "陈春明",
          "13352837426", "自取", "2020年8月22日 13:12:09"
        ],
        arr3:[
          {
            title:"民族武术专业参考信息",
            arr:[]
          },
          {
            title:"审核情况:",
            arr:[
              "● 该专业已审核通过38人，占全部新生18.3%",
              "● 审核通过人中中考成绩最高376分，最低215分，平 均分数285.6分",
              "● 审核通过人中男17人，女21人",
              "● 审核通过人中家庭类型为农业32人，非农6人"
            ]
          },
          {
            title:"缴费情况：",
            arr:[
              "● 该专业已完成缴费人员25人，占全部已缴费新生 数量的19.5% ",
              "● 已完成缴费人中中考成绩最高323分，最低232分， 平均分数292.6分 ",
              "● 已完成缴费人中男14人，女11人",
              "● 已完成缴费中家庭类型为农业23人，非农2人"
            ]
          }
        ]
      }
    },
    methods: {
      back(){
        console.log(this.$router.go(-1))
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
    line-height: 25px;
    font-weight: 900;
    letter-spacing: 0.32px;
    color: #707070;
    font-size: 12px;
  }
</style>
