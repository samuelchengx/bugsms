exports.title = '新建事件'
exports.items = {
  name: {
    index: 'name',
    label: '事件名',
  },
  key: {
    index: 'key',
    label: '事件key',
  },
  model: {
    index: 'model',
    label: '事件model',
  },
  type: {
    index: 'type',
    label: '事件类型',
  },
  filter: {
    index: 'filter',
    label: '事件筛选',
  },
  level: {
    index: 'level',
    label: '事件等级',
  },
}

exports.methods = {
  new: {
    name: '新建',
    method: 'createdefine',
  },
}
