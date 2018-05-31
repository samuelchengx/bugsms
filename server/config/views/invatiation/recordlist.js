/** **listview config generate by KAKA LAZY TOOLS
*ENJOOY CODING!
*VERSION 0.1
*/
exports.title = 'invatiation/recordlist'
exports.url = 'v2/admin/invitation/getrecords'
exports.pageSize = 10
exports.items = {}
exports.items.id = {}
exports.items.id.index = 'id'
exports.items.id.label = 'id'
exports.items.no = {}
exports.items.no.index = 'no'
exports.items.no.label = 'no'

exports.items.code = {}
exports.items.code.index = 'code'
exports.items.code.label = '邀请码'
exports.items.code.filter = true

exports.items.invid = {
  index: 'invuser',
  label: '邀请用户id',
  display: 'id',
  filter: true,
}

exports.items.invuser = {}
exports.items.invuser.index = 'invuser'
exports.items.invuser.label = '邀请用户姓名'
exports.items.invuser.display = 'name'
exports.items.invmobile = {
  index: 'invuser',
  lable: '邀请用户手机',
  display: 'mobile',
}
exports.items.reguserid = {
  index: 'reguser',
  label: '注册用户id',
  filter: true,
  display: 'id',
}
exports.items.regusername = {
  index: 'reguser',
  label: '注册用户姓名',
  display: 'name',
}

exports.items.regmobile = {
  index: 'reguser',
  label: '注册用户手机',
  display: 'mobile',
}
// exports.items.reguser.display='id';
// exports.items.reguser.value='id';
// exports.items.reguser.display='name';
// exports.items.reguser.value='name';
// exports.items.reguser.display='mobile';
// exports.items.reguser.value='mobile';
exports.items.invtype = {}
exports.items.invtype.index = 'invtype'
exports.items.invtype.label = '类型'
exports.items.invtype.display = 'name'

exports.items.cashAccount = {}
exports.items.cashAccount.index = 'cashAccount'
exports.items.cashAccount.label = '可用'
exports.items.cashAccount.display = 'cash'

exports.items.pending = {
  index: 'cashAccount',
  label: '在途',
  display: 'pending',
}

exports.items.treature = {
  index: 'cashAccount',
  label: '资产估值',
  display: 'treature',
}
// exports.items.cashAccount.value='cash';
// exports.items.cashAccount.display='pending';
// exports.items.cashAccount.value='pending';
// exports.items.cashAccount.display='treature';
// exports.items.cashAccount.value='treature';
