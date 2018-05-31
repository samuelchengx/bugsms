/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '添加用户到用户组'
exports.items = {
  groupid: {
    index: 'groupid',
    label: '组id',
    selectview: 'authgrouplist',
  },
  userid: {
    index: 'userid',
    label: '用户',
    selectview: 'authuser',
  },
}

// exports.idfield = "id"
exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createauthgroupitem',
  },
}
