var post = require('../dao/post')

var listdata = function (url, lang, accessToken,
  pageSize, pageIndex, filters, cb, error) {
  var server = post.postToServer()
  server.post(url, {
    accessToken: accessToken,
    lang: lang,
    pageSize: pageSize,
    pageIndex: (pageIndex),
    filters: filters,
  }).success((data) => {
    cb(data)
  })
    .error((data) => {
      if (error !== undefined) { error(data) }
    })
}
var indexdata = function (url, lang, accessToken, id, cb, error) {
  var server = post.postToServer()
  server.post(url, {
    accessToken: accessToken,
    lang: lang,
    id: id,
  }).success((data) => {
    cb(data)
  })
    .error((data) => {
      if (error !== undefined) { error(data) }
    })
}
exports.auditdata = function (url, lang, accessToken,
  pageSize, pageIndex, filters, cb, error) {
  var server = post.postToServer()
  server.post(url, {
    accessToken: accessToken,
    lang: lang,
    pageSize: pageSize,
    pageIndex: (pageIndex),
    checkStatus: 0,
  }).success((data) => {
    cb(data)
  })
    .error((data) => {
      if (error !== undefined) { error(data) }
    })
}
exports.listdata = listdata
exports.indexdata = indexdata

