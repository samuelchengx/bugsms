exports.items = {
  id: {
    index: 'id',
    label: 'id',
    input: 'readonly',
  },
  eventName: {
    index: 'eventName',
    label: '事件名',
  },
  eventKey: {
    index: 'eventKey',
    label: '事件key',
  },
  eventModel: {
    index: 'eventModel',
    label: '事件model',
  },
  eventType: {
    index: 'eventType',
    label: '事件类型',
  },
  eventFilter: {
    index: 'eventFilter',
    label: '事件筛选',
  },
  eventLevel: {
    index: 'eventLevel',
    label: '事件等级',
  },
}
exports.title = '编辑事件'
exports.url = 'v2/admin/notify/getdefineinfo'
exports.pageSize = 10
exports.methods = {
  create: {
    name: '保存',
    method: 'savedefine',
  },
}
exports.idfield = 'id'
exports.loadmethod = 'getdefine'
