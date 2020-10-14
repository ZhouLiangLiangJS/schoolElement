let demoList = {
  title: "一号楼",
  arr: [{
      title: "五楼",
      arr: [{
          title: '1-401',
          arr: [{
              title: "1号上铺 彭东东 民舞2001班"
            },
            {
              title: "1号上铺 彭东东 民舞2001班"
            },
            {
              title: "1号上铺 彭东东 民舞2001班"
            },
            {
              title: "1号上铺 彭东东 民舞2001班"
            }
          ]
        },
        {
          title: '1-401',
          arr: [{
            title: "1号上铺 彭东东 民舞2001班"
          }]
        }, {
          title: '1-401',
          arr: [{
              title: "1号上铺 彭东东 民舞2001班"
            },
            {
              title: "1号上铺 彭东东 民舞2001班"
            },
            {
              title: "1号上铺 彭东东 民舞2001班"
            },
            {
              title: "1号上铺 彭东东 民舞2001班"
            }
          ]
        }
      ]
    },
    {
      title: "五楼",
      arr: [{
        title: '1-401',
        arr: [{
          title: "1号上铺 彭东东 民舞2001班"
        }]
      }]
    }
  ]
}
export default {
  'post|/setSS': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
