/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '通知列表'
exports.url = 'v2/admin/notify/getnotifydefine'
exports.pageSize = 10
exports.items = {
  id: {
    index: 'id',
    label: 'id',

  },
  notifyName: {
    index: 'notifyName',
    label: '事件名',
    filter: true,
  },
  notifyKey: {
    index: 'notifyKey',
    label: '事件key',
    filter: true,
  },
  notifyModel: {
    index: 'notifyModel',
    label: '事件model',
    filter: true,
  },
  notifyType: {
    index: 'notifyType',
    label: '事件类型',
    filter: true,
  },
  notifyFilter: {
    index: 'notifyFilter',
    label: '事件筛选',
    filter: true,
  },
  notifyLevel: {
    index: 'notifyLevel',
    label: '事件等级',
    filter: true,
  },
}
exports.editview = 'editnotifydefine'
exports.idfield = 'id'
exports.methods = {
  delete: {
    name: '删除',
    filter: 1,
    method: 'deletedefine',
  },
}
exports.nav = {
  save: {
    text: '修改',
    view: '',
  },
}
