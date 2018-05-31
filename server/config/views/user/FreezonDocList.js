/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '用户人民币冻结列表'
exports.url = 'admin/user/getfreezondocs'
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
  fromBankCard: {
    index: 'userid',
    label: '用户',
    filter: true,
  },
  fromBankCardType: {
    index: 'accountid',
    label: '用户账户',
    filter: true,
  },
  type: {
    index: 'type',
    label: '类型',
    display: 'name',
    dictype: 'usercash_freezondoc_type',
    filter: true,
  },
  status: {
    index: 'status',
    label: '状态',
    display: 'name',
    dictype: 'usercash_freezondoc_status',
    filter: true,
  },
  amount: {
    index: 'amount',
    label: '金额',
  },
  checkUser: {
    index: 'checkUser',
    label: '审核人',
  },
  checkTime: {
    index: 'checkTime',
    label: '审核时间',
  },
  success: {
    index: 'success',
    label: '是否成功',
    filter: true,
  },
  notes: {
    index: 'notes',
    label: '说明',
    filter: true,
  },
}

exports.idfield = 'no'
exports.methods = {
  check: {
    name: '审核',
    filter: 1,
    method: 'userfreezondoccheck',
  },
}
