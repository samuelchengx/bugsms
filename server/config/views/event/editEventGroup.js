exports.items = {
  id: {
    index: 'id',
    label: 'id',
    input: 'readonly',
  },
  groupName: {
    index: 'groupName',
    label: '组名',
  },
  groupNote: {
    index: 'groupNote',
    label: '说明',
  },
}

exports.title = '编辑通知组'
exports.url = 'v2/admin/notify/getgroup'
exports.pageSize = 10
exports.methods = {
  create: {
    name: '保存',
    method: 'savenotifygroup',
  },
}
exports.idfield = 'id'
exports.loadmethod = 'getnotifygroup'
