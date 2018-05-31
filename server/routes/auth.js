import auth_model from '../model/auth'
import makeTree from '../common/tree'

const req_token = (req, res, next) => {
  auth_model.require_admintoken().then(
    (data) => {
      res.send(data)
    },
  )
}

const login = (req, res, next) => {

  auth_model.login(
    req.token,
    req.body.userid,
    req.body.pwd,
  ).then(
    (data) => {
      res.send(data)
    },
  )

}

const check_code = (req, res, next) => {
  auth_model.check_code(
    req.token,
    req.body.no,
    req.body.code,
  ).then(
    data => res.send(data),
  )
}

const get_menu = (req, res, next) => {
  auth_model.getmenu(
    req.token,
  ).then((data) => {

    if (data.data) {
      let tree = makeTree.treeNode(data.data)
      data.data = tree
      res.send(data)
    } else {
      res.send(data)
    }

  })
}
module.exports = {
  req_token,
  login,
  check_code,
  get_menu,
}
