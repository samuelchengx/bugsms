/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '权限列表'
exports.url = 'admin/auth/getauths'
exports.pageSize = 10
exports.items = {
  id: {
    index: 'id',
    label: 'id',

  },
  no: {
    index: 'no',
    label: '编号',
    filter: true,
  },
  name: {
    index: 'name',
    label: '权限名称',
    filter: true,
  },
  url: {
    index: 'url',
    label: '权限地址',
    filter: true,
  },
  type: {
    index: 'type',
    label: '类型',
    display: 'name',
    dictype: 'auth_type',
    filter: true,
  },
  notes: {
    index: 'notes',
    label: '说明',
  },
}
exports.editview = 'editAuth'
exports.idfield = 'id'
exports.methods = {
  delete: {
    name: '删除',
    filter: 1,
    method: 'deleteauth',
  },
}
exports.nav = {
  save: {
    text: '修改',
    view: '',
  },
}
