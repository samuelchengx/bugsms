/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '内部转账列表'
exports.url = 'admin/cash/getcashjournaldocs'
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
    index: 'fromBankCard',
    label: '出账银行卡',

    filter: true,
  },
  fromBankCardType: {
    index: 'fromBankCardType',
    label: '出账银行卡类型',
    display: 'name',
    dictype: 'account_type',
    filter: true,
  },
  toBankCard: {
    index: 'toBankCard',
    label: '入帐银行卡',
    filter: true,
  },
  toBankCardType: {
    index: 'toBankCardType',
    label: '入帐银行卡类型',
    display: 'name',
    dictype: 'account_type',
    filter: true,
  },
  type: {
    index: 'type',
    label: '类型',
    display: 'name',
    dictype: 'syscash_journaldoc_stype',
    filter: true,
  },
  status: {
    index: 'status',
    label: '状态',
    display: 'name',
    dictype: 'syscash_journaldoc_status',
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
    method: 'cashjournaldoccheck',
  },
}
