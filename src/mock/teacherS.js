let demoList = {
          day1:75,
          day2:75,
          day3:75,
          maxPage:2,
          arr:[
            {
              name:'聂辛庄',
              sex:'男',
              zgh:130921200212305612,
              tel:15139225822,
              zy:'民族武术',
              fz:'招就处'
            }
          ]
        }
export default {
    'post|/teacher/search':  option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
