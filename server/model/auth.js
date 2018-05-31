import request from '../framework/request'

var post = require('../dao/post')

var require_token = function () {
  return request.post('api/auth/token/require')
}

/**
 * 申请管理员token
 */
var require_admintoken = function (
) {
  return request.post('auth/token/adminrequire')
}

/**
 * 管理员登录
 * @param {*} accessToken 管理员token
 * @param {*} userid 管理员id
 * @param {*} pwd 管理员密码
 */
var login = function (accessToken, userid, pwd) {
  return request.post('admin/login', {
    accessToken,
    userid,
    pwd,
  })
}

var change_pwd = function (accessToken, oldpwd, newpwd, cb, error) {
  var server = post.postToServer()
  var ob = {
    accessToken: accessToken,
    pwd: oldpwd,
    newPwd: newpwd,
  }

  server.post('/admin/savepwd', ob)
    .success(cb)
    .error(error)
}

var getmenu = function (accessToken) {
  return request.post('admin/auth/getusermenus', {
    accessToken,
  })

}
let get_user_info = function (accessToken, cb, error) {
  var server = post.postToServer()
  server.post('/v2/admin/profile/getprofile',

    { accessToken: accessToken },
  )
    .success(cb)
    .error(error)
}
const check_code = function (accessToken, no, code) {

  return request.post('admin/checkcode', {
    accessToken,
    auth_check_item: no,
    auth_check_code: code,
  })
}
exports.require_token = require_token
exports.change_pwd = change_pwd
exports.login = login
exports.getmenu = getmenu
exports.require_admintoken = require_admintoken
exports.get_user_info = get_user_info
exports.check_code = check_code
