var post = require('../dao/post')

var regUser = function (accessToken, user, pwd, paypwd, cb, error) {

  var server = post.postToServer()
  server.post(
    'auth/reg',
    {
      data: user,
      pwd: pwd,
      paypwd: paypwd,
      accessToken: accessToken,
      verify: 'KaKamfPwd8080',
    },
  )

    .success(cb)
    .error(error)
}

/**
 *
 * @param {string} accessToken
 * @param {string} loginid
 * @param {string} username
 * @param {string} nickname
 * @param {string} mobile
 * @param {string} pwd
 * @param {function} paypwd
 * @param {function} cb
 * @param {function} error
 */
var regUserParams = function (accessToken,
  loginid, username, nickname, idno, mobile, pwd, paypwd, cb, error) {
  regUser(
    accessToken,
    {
      loginid: loginid,
      name: username,
      nickname: nickname,
      mobile: mobile,

    },
    pwd,
    paypwd,
    cb, error,
  )
}

var getBankCards = function (accessToken, cb, error) {
  var server = post.postToServer()
  server.post('user/getbankcards',
    {
      accessToken: accessToken,
    }).success(cb)
    .error(error)
}

/**
 * 添加银行卡
 * @param {*} accessToken
 * @param {*} 卡号
 * @param {*} 开户行名称
 * @param {*} 银行类型
 * @param {*} cb
 * @param {*} error
 */

var regBankCard = function (accessToken, bankno, bankname, banktype, phone, verify, cb, error) {
  var server = post.postToServer()
  server.post('user/addbankcard', {
    accessToken: accessToken,
    bank_no: bankno,
    bank_name: bankname,
    bank_type: banktype,
    phone: phone,
    verfy: verify,

  })
    .success(cb)
    .error(error)
}

var login = function (accessToken, userid, pwd, cb, error) {
  var server = post.postToServer()
  var ob = {

    accessToken: accessToken,
    userid: userid,
    pwd: pwd,
    code: 'haha',
  }
  console.log(ob)
  server.post('auth/login',
            ob)
        .success(cb)
        .error(error)
}

exports.loginCommon = login

exports.regUser = regUser
exports.getBankCards = getBankCards
exports.regBankCard = regBankCard
exports.regUserParams = regUserParams

