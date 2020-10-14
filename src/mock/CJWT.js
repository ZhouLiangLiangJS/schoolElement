let demoList ={
          maxPage:2,
          arr:[
            {
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            },{
              content: '如何坐车或打车到学校？',
              time: '11-24 23:13'
            }
          ]
        }
export default {
  'post|/CJWT': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
