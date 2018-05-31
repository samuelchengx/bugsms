/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '新建冻结'
exports.items = {
  userid: {
    index: 'userid',
    label: '用户',
    selectview: 'userlist',
  },
  notes: {
    index: 'notes',
    label: '说明',
  },
}

exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createfreezondoc',
  },
}
