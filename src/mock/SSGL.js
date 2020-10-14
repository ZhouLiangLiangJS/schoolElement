let demoList = {
  classShuShe: [{
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    },
    {
      id: 1,
      title: '民武20001班'
    }
  ],
  shushehao: {
    sex0: [{
        id: 1,
        title: "一号楼"
      },
      {
        id: 1,
        title: "一号楼"
      },
      {
        id: 1,
        title: "一号楼"
      }
    ],
    sex1: [{
        id: 1,
        title: "一号楼"
      },
      {
        id: 1,
        title: "一号楼"
      }
    ]
  }
}
export default {
  'post|/SSGL': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}
