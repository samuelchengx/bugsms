let post = require('../dao/post')

var query_dics = function (accessToken, dictype, cb, error) {
  var server = post.postToServer()
  server.post('admin/getdic',
    {
      accessToken: accessToken,
      type: dictype,
    }).success(
    (data) => {
      cb && typeof cb === 'function' && cb(data)
    },
  ).error(
    (data) => {
      error && typeof error === 'function' && error(data)
    },
  )
}

exports.getDictionary = query_dics
