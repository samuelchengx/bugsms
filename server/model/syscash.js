var schedule = require('node-schedule')
var com2server = require('../dao/post')
var auth = require('../model/auth')

let token

auth.require_token(
  (data) => {
    token = data.data.accessToken
  })

var iswork = false
var result = {}
result.cash = 0
result.pending = 0
exports.run = function () {
  if (iswork === false) {
    iswork = true
    var rule = new schedule.RecurrenceRule()
    var secs = [1]

    rule.second = secs
    schedule.scheduleJob(rule, () => {
      var server = com2server.postToServer()
      if (token) {
        server.post('settlement/getsyscashaccount',
          {
            accessToken: token,

          })
          .success((data) => {

            result.pending = data.data.pending
            result.cash = data.data.cash
            result.datetime = data.datetime
          })

        server.post('settlement/getcash',
          {
            accessToken: token,
          })
          .success((data) => {

            result.poolpending = data.data.pending
            result.poolcash = data.data.cash
            result.datetime = data.datetime
          })
          .error((data) => {
            auth.require_token(
              (data) => {
                token = data.data.accessToken

              })
          })
      }

    })
  }
}

exports.getcash = function () {
  return result
}
exports.pending = 0
exports.cash = 0
exports.session = ''
