exports.title = '添加用户到通知组'
exports.items = {
  groupid: {
    index: 'groupid',
    label: '组id',
    selectview: 'eventgrouplist',
  },
  authuserid: {
    index: 'authuserid',
    label: '用户',
    selectview: 'authuser',
  },
}

// exports.idfield = "id"
exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createtogroup',
  },
}
