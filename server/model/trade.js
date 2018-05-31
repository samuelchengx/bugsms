var post = require('../dao/post')

var post_buy = function (accessToken, cointtype, count, price, cb, error) {

  var server = post.postToServer()

  server.post('trade/transbuy',
    {
      accessToken: accessToken,
      count: count,
      price: price,
      type: cointtype,

    },
  ).success(cb)
    .error(error)

}

var query_buy = function (accessToken, pageindex, pagesize, filters, cb, error) {

  var server = post.postToServer()
  server.post(
    'user/gettranactionbuy',
    {
      accessToken: accessToken,
      pageSize: pagesize,
      pageIndex: pageindex,
      filters: filters,
    }).success(cb)
    .error(error)
}

var revert_by = function (accessToken, buy_no, cb, error) {

}

var post_sell = function (accessToken, cointtype, count, price, cb, error) {

  var server = post.postToServer()

  server.post('trade/transsell',
    {
      accessToken: accessToken,
      count: count,
      price: price,
      type: cointtype,

    },
  ).success(cb)
    .error(error)

}
var query_sell = function (accessToken, pageindex, pagesize, filters, cb, error) {
  var server = post.postToServer()
  server.post(
    'user/gettranactionsell',
    {
      accessToken: accessToken,
      pageSize: pagesize,
      pageIndex: pageindex,
      filters: filters,
    }).success(cb)
    .error(error)

}
var revert_sell = function (accessToken, sell_no, cb, error) {

}

var query_order = function (accessToken, pageIndex, pageSize, filers, cb, error) {

}

exports.buy_post = post_buy
exports.buy_query = query_buy
exports.buy_revert = revert_by
exports.sell_post = post_sell
exports.sell_query = query_sell
exports.sell_revert = revert_sell
exports.order_query = query_order
