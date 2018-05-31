var auth = require('../model/auth')
var express = require('express')

var router = express.Router()

var chkSession = function (req, res, next) {
  console.log(`chksession ${req.session.token}`)
  let ua = req.headers['user-agent'].toLowerCase()

  console.log(`the ua is ${ua}`)
  if (req.session.token === undefined) {
    auth.require_token(
      (data) => {
        req.session.token = data.data.accessToken
        console.log(req.session.token)
        next()
      },
      (err) => {
        res.send(`error:${err.message}`)
      },
    )
  } else {
    next()
  }
}

var chkAdminSession = function (req, res, next) {
  console.log(`chkAdminSession ${req.session.token}`)
  if (req.session.token === undefined) {
    auth.require_admintoken(
      (data) => {
        req.session.token = data.data.accessToken
        console.log(req.session.token)
        next()
      },
      (err) => {
        res.send(`error:${err.message}`)
      },
    )
  } else {
    next()
  }
}

var resetToken = function (req, res, next) {
  if (req.session && req.session.token) {
    req.session.token = undefined
  }
  chkAdminSession(req, res, next)
}

router.get('/', chkSession)
exports.checksession = router
exports.chksession = chkAdminSession
exports.resetToken = resetToken

exports.checklogin = function (req, res, next) {
  if (req.session.userid === undefined) {
    console.log(req.method)
    if (req.method === 'GET') { res.redirect('/login') } else { res.send({ code: -1, msg: '请重新登录' }) }
  } else {

    if (req.session.menu === undefined) {
      auth.getmenu(req.session.token,
        (data) => {
          res.locals.menu = data
          next()
        },
        (eer) => {
          console.log(eer)
        },
      )
    } else {
      res.locals.menu = req.session.menu
      next()
    }
  }
}
