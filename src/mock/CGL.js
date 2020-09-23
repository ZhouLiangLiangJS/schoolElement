let demoList = {
          titleNum: 123,
          ArrC: [{
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },

            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },
            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },
            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            },
            {
              title: '船舶专业群',
              num: 119,
              child: [{
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                },
                {
                  title: '船舶2001班',
                  num: 123
                }
              ]
            }
          ]
        }
export default {
  'post|/CGL': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
