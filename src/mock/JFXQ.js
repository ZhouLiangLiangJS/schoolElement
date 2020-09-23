let demoList = {
          liuShui:"130921200212305612",
          xiangMu:"2020-2021学年春秋校服费",
          jinE:"500",
          name:"任宝协",
          xueHao:"308201309092700188",
          tel:"18860157403",
          class:"民族武术601班",
          BZR:"陈新雷",
          time:"2020-10-21 16:05:31",
          payType:"微信"
        }
export default {
  'post|/JFXQ': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
