/** **listview config generate by KAKA LAZY TOOLS
*ENJOOY CODING!
*VERSION 0.1
*/
exports.title = 'activity/invrecord'
exports.url = 'v2/admin/act/invrecordlist'
exports.pageSize = 10
exports.items = {}
exports.items.id = {}
exports.items.id.index = 'id'
exports.items.id.label = '用户id'
exports.items.name = {}
exports.items.name.index = 'name'
exports.items.name.label = '姓名'
exports.items.name.filter = true
exports.items.mobile = {}
exports.items.mobile.index = 'mobile'
exports.items.mobile.label = '手机'
exports.items.mobile.filter = true
exports.items.status = {}
exports.items.status.index = 'status'
exports.items.status.label = '状态'
exports.items.lastlogin = {}
exports.items.lastlogin.index = 'lastlogin'
exports.items.lastlogin.label = 'lastlogin'
exports.items.invcode = {}
exports.items.invcode.index = 'invcode'
exports.items.invcode.label = '邀请码'
exports.items.invcode.filter = true
exports.items.invStatus = {}
exports.items.invStatus.index = 'invStatus'
exports.items.invStatus.label = '邀请人数'
exports.items.invStatus.display = 'userInvCode'
// exports.items.invStatus.value='userInvCode';
exports.items.invCash = {
  index: 'invStatus',
  label: '充值金额',
  display: 'userInvCount',
}// exports.items.invStatus.display='userInvCount';
// exports.items.invStatus.value='userInvCount';
