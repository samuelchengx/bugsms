/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '新建外部转账'
exports.items = {
  bankCard: {
    index: 'bankCard',
    label: '银行卡',
    selectview: 'bankCardList',
  },
  bankCardType: {
    index: 'bankCardType',
    label: '银行卡类型',
    dictype: 'account_type',
  },
  amount: {
    index: 'amount',
    label: '金额',
  },
  notes: {
    index: 'notes',
    label: '说明',
  },
  type: {
    index: 'type',
    label: '类型',
    dictype: 'cash_journaldoc_type',
  },
}

exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createjournaldoc',
  },
}
