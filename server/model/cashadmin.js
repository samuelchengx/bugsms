/**
 * 现金管理模块
 * @version 0.1
 * @author geyunfei(geyunfei@kakamf.com)
 *
 */

var post = require('../dao/post')

var query_recharge_list = function (accessToken, pagesize, pageindex, filters, cb, error) {
  var server = post.postToServer()
  server.post(
    'cash/getrechargelist',
    {
      accessToken: accessToken,
      pageSize: pagesize,
      pageIndex: pageindex,
      filters: filters,
    }).success(cb)
    .error(error)

}

var recharge_confirm = function (accessToken, recharg_no, confirm_result, cb, error) {
  var server = post.postToServer()
  server.post('cash/rechargconfirm',
    {
      accessToken: accessToken,
      no: recharg_no,
      confirm: confirm_result,
    }).success(cb)
    .error(error)
}

var query_withdrawl_list = function (accessToken, pagesize, pageindex, filters, cb, error) {
  var server = post.postToServer()
  server.post(
    'cash/getrechargelist',
    {
      accessToken: accessToken,
      pageSize: pagesize,
      pageIndex: pageindex,
      filters: filters,
    }).success(cb)
    .error(error)

}

// var withdral_confirm = function (accessToken, recharg_no, confirm_result, cb, error) {
//   var server = post.postToServer()
//   server.post('cash/rechargconfirm',
//     {
//       accessToken: accessToken,
//       no: recharg_no,
//       confirm: confirm_result,
//     }).success(cb)
//     .error(error)
// }

exports.query_recharge_list = query_recharge_list
exports.recharge_confirm = recharge_confirm
exports.query_withdrawl_list = query_withdrawl_list
