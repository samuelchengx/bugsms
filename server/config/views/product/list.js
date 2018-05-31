/** **listview config generate by KAKA LAZY TOOLS
*ENJOOY CODING!
*VERSION 0.1
*/
exports.title = '产品发布审核'
exports.url = 'v2/admin/product/list'
exports.pageSize = 30
exports.idfield = 'no'
exports.items = {}
exports.items.no = {}
exports.items.no.index = 'no'
exports.items.no.label = '编号'
exports.items.name = {}
exports.items.name.index = 'name'
exports.items.name.label = '名称'
exports.items.cointype = {}
exports.items.cointype.index = 'cointype'
exports.items.cointype.label = '币种/房源'
exports.items.starttime = {}
exports.items.starttime.index = 'starttime'
exports.items.starttime.label = '起售时间'
exports.items.type = {}
exports.items.type.index = 'type'
exports.items.type.label = '类型'
// exports.items.type.display='no';
// exports.items.type.value='no';
exports.items.type.display = 'name'
// exports.items.type.value='name';
exports.items.status = {}
exports.items.status.index = 'status'
exports.items.status.label = '状态'
exports.items.status.display = 'name'
exports.items.owner = {}
exports.items.owner.index = 'owner'
exports.items.owner.label = '发售人'
// exports.items.owner.display='id';
// exports.items.owner.value='id';
// exports.items.owner.display='loginid';
// exports.items.owner.value='loginid';
exports.items.owner.display = 'name'
// exports.items.owner.value='name';
// exports.items.owner.display='idno';
// exports.items.owner.value='idno';
// exports.items.owner.display='mobile';
// exports.items.owner.value='mobile';
exports.items.mobile = {
  index: 'owner',
  label: '联系电话',
  display: 'mobile',
}
exports.items.feetype = {}
exports.items.feetype.index = 'feetype'
exports.items.feetype.label = '手续费类型'
// exports.items.feetype.display='no';
// exports.items.feetype.value='no';
exports.items.feetype.display = 'name'
// exports.items.feetype.value='name';
exports.items.feerate = {}
exports.items.feerate.index = 'feerate'
exports.items.feerate.label = '费率'
exports.items.voucherenable = {}
exports.items.voucherenable.index = 'voucherenable'
exports.items.voucherenable.label = '允许用券'
exports.items.price = {}
exports.items.price.index = 'price'
exports.items.price.label = '单价'
exports.items.count = {}
exports.items.count.index = 'count'
exports.items.count.label = '数量'
exports.items.amount = {}
exports.items.amount.index = 'amount'
exports.items.amount.label = '总量'
exports.items.sellno = {}
exports.items.sellno.index = 'sellno'
exports.items.sellno.label = '卖单'
exports.items.frozentime = {}
exports.items.frozentime.index = 'frozentime'
exports.items.frozentime.label = '冻结时间'
exports.items.endTime = {}
exports.items.endTime.index = 'endTime'
exports.items.endTime.label = 'endTime'
exports.items.revokeTime = {}
exports.items.revokeTime.index = 'revokeTime'
exports.items.revokeTime.label = 'revokeTime'
exports.items.completionTime = {}
exports.items.completionTime.index = 'completionTime'
exports.items.completionTime.label = 'completionTime'
exports.methods = {}

exports.methods.zero = {}
exports.methods.zero.name = '审核'
exports.methods.zero.method = 'productcheck'
exports.methods.zero.filter = "`${itemdata['status']['no']=='PRS10'}`"  // eslint-disable-line
exports.methods.refuse =
{
  name: '拒绝',
  method: 'productrefuse',
  filter: "`${itemdata['status']['no']=='PRS10'}`", // eslint-disable-line
}
