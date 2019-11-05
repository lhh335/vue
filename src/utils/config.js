export const mock_menus = [
  {
    label: '首页',
    menu_type: 1
  },
  {
    label: '广告投放',
    menu_type: 1,
    children: [
      {
        label: '广告组',
        menu_type: 1
      },
      {
        label: '广告',
        menu_type: 1
      },
      {
        label: '创意列表',
        menu_type: 1
      }
    ]
  },
  {
    label: '财务管理',
    menu_type: 1
  },
  {
    label: '统计报表',
    menu_type: 1,
    children: [
      {
        label: '投放效果',
        menu_type: 1,
      }
    ]
  },
  {
    label: '账户管理',
    menu_type: 1,
  },
  {
    label: '通知提醒',
    menu_type: 1,
  },
  {
    label: '工具中心',
    menu_type: 1,
    children: [
      {
        label: '日志查询',
        menu_type: 1,
      },
      {
        label: '转化管理',
        menu_type: 1,
      },
      {
        label: '美图DMP',
        menu_type: 1,
      }
    ]
  }
]