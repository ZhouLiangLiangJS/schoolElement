let demoList = [{
    name: '彭冻革',
    sex: '男',
    sfz: '610822200905213230',
    tel: '15227579113',
    zy: '畜牧兽医',
    zsls: '彭万里',
    leix: '未分班'
  },
  {
    name: '彭冻革',
    sex: '男',
    sfz: '610822200905213230',
    tel: '15227579113',
    zy: '畜牧兽医',
    zsls: '彭万里',
    leix: '未分班'
  },
  {
    name: '彭冻革',
    sex: '男',
    sfz: '610822200905213230',
    tel: '15227579113',
    zy: '畜牧兽医',
    zsls: '彭万里',
    leix: '未分班'
  }, {
    name: '彭冻革',
    sex: '男',
    sfz: '610822200905213230',
    tel: '15227579113',
    zy: '畜牧兽医',
    zsls: '彭万里',
    leix: '未分班'
  }
]
export default {
  'post|/STSearch': option => {
    let arr = demoList
    if (option.body) {
      arr = [{
        name: '彭冻革',
        sex: '男',
        sfz: '610822200905213230',
        tel: '15227579113',
        zy: '畜牧兽医',
        zsls: '彭万里',
        leix: '未分班'
      }]
    }
    return {
      status: 200,
      message: 'success',
      data: arr
    };
  }
}
