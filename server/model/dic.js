var post = require('../dao/post')

var getdics = function (operation, accessToken,
  cb,
  error,
) {
  var server = post.postToServer()
  server.post(`dic/${operation}`,
    { accessToken: accessToken})
    .success(cb)
    .error(error)

}

exports.get_banks = function (token, cb, error) {
  getdics('getbanks', token, cb, error)
}
exports.get_buystatus = function (token, cb, error) {
  getdics('getbuysatus', token, cb, error)
}
exports.get_sellstatus = function (token, cb, error) {
  getdics('getsellstatus', token, cb, error)
}
