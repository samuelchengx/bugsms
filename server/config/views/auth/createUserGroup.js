/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '新建用户组'
exports.items = {
  groupName: {
    index: 'groupName',
    label: '组名',
  },
  groupNote: {
    index: 'groupNote',
    label: '组说明',
  },
}

exports.idfield = 'id'
exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createauthgroup',
  },
}
