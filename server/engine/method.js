var com2server = require('../dao/post')

var baseconfig = '../config/methods/'
var exute_method = function (method, accessToken, data, cb, err) {
  console.log(`prepare to exec ${method}`)
  let methoddef = require(baseconfig + method)  // eslint-disable-line
  var obj = methoddef.defaultparam
  if (obj === undefined) { obj = {} }
  console.log(obj)
  obj.accessToken = accessToken
  if (methoddef.postdata === true) {
    if (obj.data === undefined) { obj.data = {} }

    Object.keys(methoddef).forEach(
      (p) => {
        obj.data[p] = data[methoddef.params[p]]
      },
    )
    if (methoddef.idfield) {
      obj[methoddef.idfield] = obj.data[methoddef.idfield]
      delete obj.data[methoddef.idfield]
    }
  } else {
    Object.keys(methoddef.params).forEach((_p) => {
      obj[_p] = data[methoddef.params[_p]]
    })
  }
  console.log(obj)
  console.log(methoddef.url)
  var server = com2server.postToServer()
  server.post(
    methoddef.url,
    obj,
  ).success(cb)
    .error(err)
}

exports.exute_method = exute_method
