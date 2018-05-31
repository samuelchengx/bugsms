exports.title = '增加系统付款'
exports.items = {}
exports.items.amount = {
  index: 'amount',
  label: '金额',
}

exports.items.sysBankNo = {
  index: 'sysBankNo',
  label: '系统卡号',
  selectview: 'bankCardList',
}

exports.items.note = {
  index: 'note',
  label: '说明',
}

exports.items.userid = {
  index: 'userid',
  label: '用户',
  selectview: 'userlist',
}

exports.methods = {
  new: {
    name: '新建',
    method: 'createpayuser',
  },
}
