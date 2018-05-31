exports.title = '新建通知定义'
exports.items = {
  name: {
    index: 'name',
    label: '通知名',
  },
  event: {
    index: 'event',
    label: '选择通知组',
    selectview: 'eventgrouplist',
  },
  type: {
    index: 'type',
    label: '通知类型',
  },
  filter: {
    index: 'filter',
    label: '通知筛选',
  },
  level: {
    index: 'level',
    label: '通知等级',
  },
}

exports.methods = {
  new: {
    name: '新建',
    method: 'createnotifydefine',
  },
}
