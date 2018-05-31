// var itemdef = require('../event/createDefine');
exports.items = {
  id: {
    index: 'id',
    label: 'id',
    input: 'readonly',
  },
  notifyName: {
    index: 'notifyName',
    label: '通知名',
  },
  notifyEvent: {
    index: 'notifyEvent',
    label: '选择通知组',
    selectview: 'eventgrouplist',
  },
  notifySpecialclass: {
    index: 'notifySpecialclass',
    label: '通知类型',
  },
  notifyFilter: {
    index: 'notifyFilter',
    label: '通知筛选',
  },
  notifyLevel: {
    index: 'notifyLevel',
    label: '通知等级',
  },
  notifyType: {
    index: 'notifyType',
    label: '类型',
  },
  notifyFmt: {
    index: 'fmt',
    label: 'fmt',
  },
}
// for (var p in itemdef.items)
//     exports.items[p] = itemdef.items[p];
exports.title = '编辑通知定义'
exports.url = 'v2/admin/notify/getnotifydefineinfo'
exports.pageSize = 10
exports.methods = {
  create: {
    name: '保存',
    method: 'savenotifydefine',
  },
}
exports.idfield = 'id'
exports.loadmethod = 'getnotifydefine'
