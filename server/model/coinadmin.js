var post = require('../dao/post')

/**
  * 一级高场发币操作
  * @param {*g} accessToken
  * @param {*} coin_type
  * @param {*} coincount
  * @param {*} cb
  * @param {*} err
  */
var coin_recharge = function (accessToken, coin_type, userid, coincount, cb, err) {
  var server = post.postToServer()
  server.post(
    'coin/rechage',
    {
      accessToken: accessToken,
      amount: coincount,
      coin_type: coin_type,
      userid: userid,
    })
    .success(cb)
    .error(err)

}

var coin_rechargeconfrm = function (accessToken, rechargeno, confirmresult, cb, err) {
  var server = post.postToServer()
  server.post(
    'coin/rechargconfirm',
    {
      accessToken: accessToken,
      no: rechargeno,
      confirm: confirmresult,
    })
    .success(cb)
    .error(err)
}

var coin_rechargelist = function (accessToken, pageIndex, pageSize, cb, err) {

}

var coin_withdrawal = function (accessToken, coint_type, coinaccount, address, cb, error) {

}
var coin_withdrawallist = function (accessToken, pageIndex, pageSize, cb, error) {

}

exports.coin_recharge = coin_recharge
exports.coin_rechargelist = coin_rechargelist
exports.coin_withdrawal = coin_withdrawal
exports.coin_withdrawallist = coin_withdrawallist
exports.coin_rechargeconfrm = coin_rechargeconfrm
