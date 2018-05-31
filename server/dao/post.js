/**
 * 与php 服务器通信的dao组件
 * ver 1.0
 * geyunfei@gmail.com
 */

'use strict'

var cfg = require('../../config/env')
var url = require('url')
var com2server = require('./com2server')
var crypto = require('crypto')

const config = cfg.server

exports.postToServer = function () {
  return com2server.postToServer(geturl)
}
exports.getFromServer = function () {
  return com2server.getFromServer(geturl)
}

var get_val_str = function (obj) {
  var array = []
  Object.keys(obj).forEach(
    (k) => {
      if (typeof obj[k] === 'object') {
        array.push(get_val_str(obj[k]))
      } else {
        array.push(obj[k])
      }
    })
  array.sort()
  return array.join('_')
}
exports.add_chk_str = function (obj) {
  var md5 = crypto.createHash('md5')
  var str = get_val_str(obj)
  md5.update(str)

  var result = obj
  console.log(str)
  result.auth_code = md5.digest('HEX')
  return result

}
// 构建URL
var geturl = function (method, params) {
  console.log(cfg)
  var returnUrl = {
    protocol: config.protocol,
    hostname: config.server,
    pathname: `${config.basepath}/${method}`,
  //  port: config.port,
  }
  if ((returnUrl.protocol === 'http' && config.port !== '80' && config.port !== undefined) ||
   (returnUrl.protocol === 'https' && config.port !== '443' && config.port !== undefined)) {
    returnUrl.port = config.port
  }

  returnUrl.query = {}
  params && Object.keys(params).forEach(
    (p) => {
      if (typeof params[p] === 'object') {
        returnUrl.query[p] = JSON.stringify(params[p])
      } else {
        returnUrl.query[p] = params[p]
      }
    })
  return url.format(returnUrl)
}
