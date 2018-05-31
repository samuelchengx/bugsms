/** **listview config generate by KAKA LAZY TOOLS
*ENJOOY CODING!
*VERSION 0.1
*/
exports.title = '用户返佣日报'
exports.url = 'v2/admin/report/day/userrb'
exports.pageSize = 30
exports.items = {}
exports.idfield = 'no'
exports.items.no = {}
exports.items.no.index = 'no'
exports.items.no.label = '编号'
exports.items.name = {}
exports.items.name.index = 'name'
exports.items.name.label = '报表名称'
exports.items.user = {}
exports.items.user.index = 'user'
exports.items.user.label = '用户'
exports.items.user.filter = true
exports.items.initInv = {}
exports.items.initInv.index = 'initInv'
exports.items.initInv.label = '上结邀请数'
exports.items.ascInv = {}
exports.items.ascInv.index = 'ascInv'
exports.items.ascInv.label = '邀请增长数'
exports.items.currentInv = {}
exports.items.currentInv.index = 'currentInv'
exports.items.currentInv.label = '邀请总数'
exports.items.rbInitInv = {}
exports.items.rbInitInv.index = 'rbInitInv'
exports.items.rbInitInv.label = '上期消费用户数'
exports.items.rbAscInv = {}
exports.items.rbAscInv.index = 'rbAscInv'
exports.items.rbAscInv.label = '消费用户增长'
exports.items.rbCurrentInv = {}
exports.items.rbCurrentInv.index = 'rbCurrentInv'
exports.items.rbCurrentInv.label = '消费用户总数'
exports.items.initRecharge = {}
exports.items.initRecharge.index = 'initRecharge'
exports.items.initRecharge.label = '上期充值'
exports.items.ascRecharge = {}
exports.items.ascRecharge.index = 'ascRecharge'
exports.items.ascRecharge.label = '本期增加'
exports.items.resultRecharge = {}
exports.items.resultRecharge.index = 'resultRecharge'
exports.items.resultRecharge.label = '本期累计'
exports.items.initBuy = {}
exports.items.initBuy.index = 'initBuy'
exports.items.initBuy.label = '上期购买'
exports.items.ascBuy = {}
exports.items.ascBuy.index = 'ascBuy'
exports.items.ascBuy.label = '本期增加'
exports.items.resultBuy = {}
exports.items.resultBuy.index = 'resultBuy'
exports.items.resultBuy.label = '本期累计'
exports.items.rbRechargeInit = {}
exports.items.rbRechargeInit.index = 'rbRechargeInit'
exports.items.rbRechargeInit.label = '上期充值'
exports.items.rbRechargeAsc = {}
exports.items.rbRechargeAsc.index = 'rbRechargeAsc'
exports.items.rbRechargeAsc.label = '充值增长'
exports.items.rbRechargeResult = {}
exports.items.rbRechargeResult.index = 'rbRechargeResult'
exports.items.rbRechargeResult.label = '充值累计'
exports.items.rbRechargeIspay = {}
exports.items.rbRechargeIspay.index = 'rbRechargeIspay'
exports.items.rbRechargeIspay.label = '充值返佣是否支付'
exports.items.rbRechargePayuser = {}
exports.items.rbRechargePayuser.index = 'rbRechargePayuser'
exports.items.rbRechargePayuser.label = '充值返佣发起'
exports.items.rbRechargePaytime = {}
exports.items.rbRechargePaytime.index = 'rbRechargePaytime'
exports.items.rbRechargePaytime.label = '充值返佣发起时间'
exports.items.rbRechargeChkuser = {}
exports.items.rbRechargeChkuser.index = 'rbRechargeChkuser'
exports.items.rbRechargeChkuser.label = '充值返佣审核'
exports.items.rbRechargeChktime = {}
exports.items.rbRechargeChktime.index = 'rbRechargeChktime'
exports.items.rbRechargeChktime.label = '充值返佣审核时间'
exports.items.rbBuyInit = {}
exports.items.rbBuyInit.index = 'rbBuyInit'
exports.items.rbBuyInit.label = '上期佣金'
exports.items.rbBuyAsc = {}
exports.items.rbBuyAsc.index = 'rbBuyAsc'
exports.items.rbBuyAsc.label = '佣金增长'
exports.items.rbBuyResult = {}
exports.items.rbBuyResult.index = 'rbBuyResult'
exports.items.rbBuyResult.label = '佣金累计'
exports.items.rbBuyIspay = {}
exports.items.rbBuyIspay.index = 'rbBuyIspay'
exports.items.rbBuyIspay.label = '消费佣金是否支付'
exports.items.rbBuyPayuser = {}
exports.items.rbBuyPayuser.index = 'rbBuyPayuser'
exports.items.rbBuyPayuser.label = '消费佣金支付发起人'
exports.items.rbBuyPaytime = {}
exports.items.rbBuyPaytime.index = 'rbBuyPaytime'
exports.items.rbBuyPaytime.label = '消费佣金支付发起时间'
exports.items.rbBuyChkuser = {}
exports.items.rbBuyChkuser.index = 'rbBuyChkuser'
exports.items.rbBuyChkuser.label = '消费佣金审核人'
exports.items.rbBuyChktime = {}
exports.items.rbBuyChktime.index = 'rbBuyChktime'
exports.items.rbBuyChktime.label = '消费佣金审核时间'
exports.items.start = {}
exports.items.start.index = 'start'
exports.items.start.label = '开始时间'
exports.items.end = {}
exports.items.end.index = 'end'
exports.items.end.label = '结束时间'
exports.items.rbRechargeStart = {}
exports.items.rbRechargeStart.index = 'rbRechargeStart'
exports.items.rbRechargeStart.label = '充值计算起始时间'
exports.items.rbBuyStart = {}
exports.items.rbBuyStart.index = 'rbBuyStart'
exports.items.rbBuyStart.label = '购买计算起始时间'
exports.items.enableOperation = {}
exports.items.enableOperation.index = 'enableOperation'
exports.items.enableOperation.label = '是否充许操作'
exports.items.enableOperation.filter = true

exports.order = [

]

exports.methods = {
  pay: {
    name: '支付',
    filter: "`${itemdata['enableOperation']=='1' && itemdata['rbBuyIspay']=='0'}`", // eslint-disable-line
    method: 'userrbpay',
  },
  check: {
    name: '审核',
    filter: "`${itemdata['enableOperation']=='1' && itemdata['rbBuyIspay']=='1' && itemdata['rbBuyChkuser']==null}`", // eslint-disable-line
    method: 'userrbcheck',
  },

}
