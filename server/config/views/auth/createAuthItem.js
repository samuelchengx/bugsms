/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '添加权限到用户组'
exports.items = {
  groupid: {
    index: 'groupid',
    label: '组id',
    selectview: 'authgrouplist',
  },
  userid: {
    index: 'authid',
    label: '权限',
    selectview: 'authlists',
  },
}

// exports.idfield = "id"
exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createauthitem',
  },
}
