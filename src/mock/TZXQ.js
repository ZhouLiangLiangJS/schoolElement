let demoList = {
  time: "2020年9月13日 11:34:27",
  conent: "学校报名缴费截止时间为2020年9月15日，请还没完成报名的同学尽快报名缴费。缴费后可直接在手机上选床。如有问题， 可直接与所在班级的班主任取得联系。（校办） ",
  spce: "会计电算化，民族武术专业，会计2001班 ",
  class: "男，女，未完成报到 ",
  num: "328人",
  success: "成功",
}
export default {
  'post|/TZXQ': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
