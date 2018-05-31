/** **listview config generate by KAKA LAZY TOOLS
 *ENJOOY CODING!
 *VERSION 0.1
 */
exports.title = '新建内部转账'
exports.items = {
  fromBankCard: {
    index: 'fromBankCard',
    label: '出账银行卡',
    selectview: 'bankCardList',
  },
  fromBankCardType: {
    index: 'fromBankCardType',
    label: '出账银行卡类型',
    dictype: 'account_type',
  },
  toBankCard: {
    index: 'toBankCard',
    label: '入帐银行卡',
    selectview: 'bankCardList',
  },
  toBankCardType: {
    index: 'toBankCardType',
    label: '入帐银行卡类型',
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
}

exports.methods = {
  new: {
    name: '新建',
    filter: 1,
    method: 'createcashjournaldoc',
  },
}
