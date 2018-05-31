exports.items = {
  amount:
  {
    index: 'amount',
    label: '房租金额',
    input: 'number',
  },
  planfee: {
    index: 'planfee',
    label: '管理费用',
    input: 'number',
  },
  starttime: {
    index: 'starttime',
    label: '起租时间',
    input: 'date',
  },
  endtime: {
    index: 'endtime',
    label: '收租时间',
    input: 'date',
  },
  unit:
  {
    index: 'unit',
    label: '最小分红单位(平米)',
  },
  coinType: {
    index: 'coinType',
    label: '项目类型',
    selectview: 'selectitem',
  },
  authDate: {
    index: 'authDate',
    label: '确权日期',
    input: 'date',
  },
}
exports.methods = {
  new: {
    name: '确认',
    method: 'bonuscreate',
  },
}
