/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '事件列表'
exports.url = 'v2/admin/notify/getdefine'
exports.pageSize = 10
exports.items = {
  id: {
    index: 'id',
    label: 'id',

  },
  eventName: {
    index: 'eventName',
    label: '事件名',
    filter: true,
  },
  eventKey: {
    index: 'eventKey',
    label: '事件key',
    filter: true,
  },
  eventModel: {
    index: 'eventModel',
    label: '事件model',
    filter: true,
  },
  eventType: {
    index: 'eventType',
    label: '事件类型',
    filter: true,
  },
  eventFilter: {
    index: 'eventFilter',
    label: '事件筛选',
    filter: true,
  },
  eventLevel: {
    index: 'eventLevel',
    label: '事件等级',
    filter: true,
  },
}
exports.editview = 'editdefine'
exports.idfield = 'id'
exports.methods = {
  delete: {
    name: '删除',
    filter: 1,
    method: 'deletenotifydefine',
  },
}
exports.nav = {
  save: {
    text: '修改',
    view: '',
  },
}
