/** **listview config generate by KAKA LAZY TOOLS
*ENJOOY CODING!
*VERSION 0.1
*/
exports.title = '项目分红列表'
exports.url = 'v2/admin/bonus/getbonuslist'
exports.pageSize = 10
exports.idfield = 'no'
exports.items = {}
exports.items.id = {}
exports.items.id.index = 'id'
exports.items.id.label = 'id'
exports.items.no = {}
exports.items.no.index = 'no'
exports.items.no.label = '编号'
exports.items.coinType = {}
exports.items.coinType.index = 'coinType'
exports.items.coinType.label = '代币类型'
exports.items.authdate = {}
exports.items.authdate.index = 'authdate'
exports.items.authdate.label = '确权日期'
exports.items.plancash = {}
exports.items.plancash.index = 'plancash'
exports.items.plancash.label = '分红金额'
exports.items.planfee = {}
exports.items.planfee.index = 'planfee'
exports.items.planfee.label = '管理费用'
exports.items.dealcash = {}
exports.items.dealcash.index = 'dealcash'
exports.items.dealcash.label = '实际分红金额'
exports.items.dealfee = {}
exports.items.dealfee.index = 'dealfee'
exports.items.dealfee.label = '剩余管理费用'
exports.items.cash = {}
exports.items.cash.index = 'cash'
exports.items.cash.label = '分红金额 '
exports.items.unit = {}
exports.items.unit.index = 'unit'
exports.items.unit.label = '最小单位'
exports.items.holdings = {}
exports.items.holdings.index = 'holdings'
exports.items.holdings.label = '持币用户数量'
exports.items.distributeCount = {}
exports.items.distributeCount.index = 'distributeCount'
exports.items.distributeCount.label = '分红用户数量'
exports.items.status = {}
exports.items.status.index = 'status'
exports.items.status.label = '状态'
// exports.items.status.display='no';
// exports.items.status.value='no';
exports.items.status.display = 'name'
// exports.items.status.value='name';
exports.items.chkuserid = {}
exports.items.chkuserid.index = 'chkuserid'
exports.items.chkuserid.label = '审核人'
exports.items.chkTime = {}
exports.items.chkTime.index = 'chkTime'
exports.items.chkTime.label = '审核时间'
exports.items.time = {}
exports.items.time.index = 'time'
exports.items.time.label = '创建时间'

exports.methods = {
  check: {
    name: '审核',
    filter: 1,
    method: 'bonuscheck',
  },
}
