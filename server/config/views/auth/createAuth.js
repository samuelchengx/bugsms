/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '新建权限'
exports.items = {
  name: {
    index: 'name',
    label: '权限名称',
  },
  url: {
    index: 'url',
    label: '权限地址',
  },
  type: {
    index: 'type',
    label: '类型',
    dictype: 'auth_type',
  },
  notes: {
    index: 'notes',
    label: '说明',
  },
  parentNo: {
    parentNo: 'parentNo',
    label: '父编号',
  },
}

exports.idfield = 'id'
exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createauth',
  },
}
