let demoList = {
  day1: 75,
  day2: 75,
  day3: 75,
  maxPage: 2,
  arr: [{
    name: '彭冻革',
    sex: '男',
    age: 15,
    fs: '148',
    zy: '木叶',
    sy: '应届生',
    xz: '3+2',
    jt: '农业',
    time: '11-24 23:12',
    ls: '谢大海',
    sh: '●',
    jf: '●',
    fb: '●',
    zp: '○',
    xc: '○',
    wp: '○'
  }]
}

export default {
  'post|/parameter/search': option => {

    let list = {
      day1: 75,
      day2: 75,
      day3: 75,
      maxPage: 2,
      arr: []
    }
    if (option.body == 'search=彭冻革') {
      list=demoList
    }
    return {
      status: 200,
      message: 'success',
      data: list
    };
  }
}
