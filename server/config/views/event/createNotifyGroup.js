exports.title = '新建通知组'
exports.items = {
  groupName: {
    index: 'name',
    label: '组名',
  },
  groupNote: {
    index: 'note',
    label: '说明',
  },
}

exports.methods = {
  new: {
    name: '新建',
    method: 'createnotifygroup',
  },
}
