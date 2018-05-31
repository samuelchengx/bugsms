var post = require('../dao/post')

var get_recharge_bankcards = function (accessToken, cb, error) {
  var server = post.postToServer()
  server.post('sys/getsysbankaccount',
    {
      accessToken: accessToken,
    })
    .success(cb)
    .error(error)
}

var recharge = function (accessToken, amount, from, to, cb, error) {

  var server = post.postToServer()
  var obj = {
    accessToken: accessToken,
    amount: amount,
    bankid: from,
    desbankid: to,
    phone: '13521510781',
  }
  console.log(obj)
  server.post('cash/rechage',
    obj,
  )
    .success(cb)
    .error(error)

}
var withdrawal = function (accessToken, amount, to, paypwd, cb, error) {

  var server = post.postToServer()
  var obj = {
    accessToken: accessToken,
    amount: amount,
    bankid: to,
    paypwd: paypwd,
  }
  console.log(obj)
  server.post('cash/withdrawal',
    obj,
  )
    .success(cb)
    .error(error)

}
/**
 * 查询用户充值记录
 * @param {} start
 * @param {*} end
 * @param {*} list
 * @param {*} pagesize
 * @param {*} pageindex
 * @param {*} filers
 * @param {*} cb
 * @param {*} error
 */
// var query_recharge_list = function (start, end, list, pagesize, pageindex, filers, cb, error) {
//   var server = post.postToServer()
// }

exports.recharge = recharge
exports.withdrawal = withdrawal

exports.get_recharge_bankcards = get_recharge_bankcards
