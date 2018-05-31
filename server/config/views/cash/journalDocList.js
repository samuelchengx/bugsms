/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '外部转账列表'
exports.url = 'admin/cash/getjournaldocs'
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
  bankCard: {
    index: 'bankCard',
    label: '银行卡',
    filter: true,
  },
  bankCardType: {
    index: 'bankCardType',
    label: '银行卡类型',
    display: 'name',
    dictype: 'account_type',
    filter: true,
  },
  type: {
    index: 'type',
    label: '类型',
    display: 'name',
    dictype: 'cash_journaldoc_type',
    filter: true,
  },
  status: {
    index: 'status',
    label: '状态',
    display: 'name',
    dictype: 'cash_journaldoc_status',
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
    method: 'journaldoccheck',
  },
}
