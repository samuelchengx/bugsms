/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */

let itemdef = require('../auth/createUserGroup')

exports.items = {
  id: {
    index: 'id',
    label: 'id',
    input: 'readonly',
  },
}
Object.keys(itemdef).forEach((key) => { exports.items[key] = itemdef.items[key] })
exports.title = '编辑用户组'
exports.url = 'admin/auth/getauthgroup'
exports.pageSize = 10
exports.methods = {
  create: {
    name: '保存',
    method: 'saveauthgroup',
  },
}
exports.idfield = 'id'
exports.loadmethod = 'getauthgroup'
