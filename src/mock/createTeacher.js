let demoList = {
              title: "聂辛庄",
              sex:"男",
              gongHao: "130921200212305612",
              tel: "15139225822",
              buMen: ["民族武术"],
              passWord: "********",
              liuC: ["招就处"]
            }
export default {
    'post|/createTeacher':  option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
