/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */

var itemdef = require('../auth/createAuth')

exports.items = {
  id: {
    index: 'id',
    label: 'id',
    input: 'readonly',
  },
  no: {
    index: 'no',
    label: '编号',
  },
}

let keys = Object.keys(itemdef)
keys.forEach((key) => {
  exports.items[key] = itemdef.items[key]
})

exports.title = '编辑权限'
exports.url = 'admin/auth/getauth'
exports.pageSize = 10
exports.methods = {
  create: {
    name: '保存',
    method: 'saveauth',
  },
}
exports.idfield = 'id'
exports.loadmethod = 'getauth'
