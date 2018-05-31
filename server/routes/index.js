import env from '../../config/env'

import { index as mainFilePath } from '../../HashMapping.json'
import { name as vendorsFilePath } from '../../manifest.json'

async function index(req, res) {
  // let userInfo = req.session && req.session.userInfo
  // 这里判断用户是否登录
  // if (!userInfo) {
  //   let url = '/login'
  //   res.redirect(url)
  // } else {

  let renderData = {
    title: '咔咔买房后台',
    main: env.globals.__DEBUG__ ? 'index.js' : mainFilePath,
    vendors: vendorsFilePath,
    env: env.globals.NODE_ENV,
    global: {
      debug: env.globals.__DEBUG__,
      apiServer: '/',
    },
  }

  res.set('content-type', 'text/html')
  res.render('index', renderData)
  // }
}

module.exports = {
  index,
}
