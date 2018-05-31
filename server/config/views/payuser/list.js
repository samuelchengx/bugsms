/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '系统付款列表'
exports.url = 'admin/pay/getpayusers'
exports.pageSize = 30
exports.idfield = 'no'
exports.items = {}
exports.items.id = {}
exports.items.id.index = 'id'
exports.items.id.label = 'id'
exports.items.no = {}
exports.items.no.index = 'no'
exports.items.no.label = '编号'
exports.items.no.filter = true
exports.items.sysBankNo = {}
exports.items.sysBankNo.index = 'sysBankNo'
exports.items.sysBankNo.label = '付款账号'
exports.items.sysBankNo.filter = true
exports.items.userid = {}
exports.items.userid.index = 'userid'
exports.items.userid.label = '用户'
exports.items.userid.display = 'name'
exports.items.userid.filter = true
exports.items.userid.filterview = 'userlist'
exports.items.amount = {}
exports.items.amount.index = 'amount'
exports.items.amount.label = '金额'
exports.items.type = {}
exports.items.type.index = 'type'
exports.items.type.label = '类型'
exports.items.type.filter = true
exports.items.type.display = 'name'
exports.items.type.dictype = 'payuser_type'
exports.items.status = {}
exports.items.status.index = 'status'
exports.items.status.label = '状态'
exports.items.status.filter = true
exports.items.status.display = 'name'
exports.items.status.dictype = 'payuser_status'
exports.items.jobType = {}
exports.items.jobType.index = 'jobType'
exports.items.jobType.label = '关联单据类型'
exports.items.jobType.filter = true
exports.items.jobType.display = 'name'
exports.items.jobType.dictype = 'payuser_jobtype'
exports.items.jobNo = {}
exports.items.jobNo.index = 'jobNo'
exports.items.jobNo.label = '关联单据号'
exports.items.jobNo.filter = true
exports.items.note = {}
exports.items.note.index = 'note'
exports.items.note.label = '说明'
exports.items.payuser = {}
exports.items.payuser.index = 'payuser'
exports.items.payuser.label = '发起人'
exports.items.payuser.display = 'name'
exports.items.payuser.filter = true
exports.items.payuser.filterview = 'userlist'
exports.items.paytime = {}
exports.items.paytime.index = 'paytime'
exports.items.paytime.label = '发起时间'
exports.items.ischeck = {}
exports.items.ischeck.index = 'ischeck'
exports.items.ischeck.label = '是否审核'
exports.items.ischeck.filter = true
exports.items.checkuser = {}
exports.items.checkuser.index = 'checkuser'
exports.items.checkuser.label = '审核人'
exports.items.checkuser.display = 'name'
exports.items.checkuser.filter = true
exports.items.checkuser.filterview = 'userlist'
exports.items.checktime = {}
exports.items.checktime.index = 'checktime'
exports.items.checktime.label = '审核时间'

exports.methods = {
  check: {
    name: '审核',
    filter: 1,
    method: 'payusercheck',
  },
}
