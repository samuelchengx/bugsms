/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '用户组列表'
exports.url = 'admin/auth/getauthgroups'
exports.pageSize = 10
exports.items = {
  id: {
    index: 'id',
    label: 'id',

  },
  groupName: {
    index: 'groupName',
    label: '组名',
    filter: true,
  },
  groupNote: {
    index: 'groupNote',
    label: '组说明',
    filter: true,
  },
}
exports.editview = 'editUserGroup'
exports.idfield = 'id'
exports.methods = {
  delete: {
    name: '删除',
    filter: 1,
    method: 'deleteauthgroup',
  },
}
exports.nav = {
  save: {
    text: '修改',
    view: '',
  },
}
