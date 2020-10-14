let demoList = {
  flag: true,
  bz: 100,
  zd: 100,
  xh: 100,
  time: "2020-10-17 16:38:04",
  xinsheng: 1075,
  shushe: 158,
  chuangwei: 1216,
  arr: [{
      id: 1,
      flag: false,
      time: "2020-9-17 16:38:03"
    },
    {
      id: 2,
      flag: true,
      time: "2020-10-17 16:38:04"
    }
  ]
}
export default {
  'post|/XTGL': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
