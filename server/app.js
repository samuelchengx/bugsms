import Express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import bodyTrimer from 'connect-trim-body'
import ejs from 'ejs'

import session from 'express-session'
import connectRedis from 'connect-redis'

// config, webpack and it's middlewares
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import config from '../config/env'
import webpackConfig from '../config/webpack.config'

// middlewares

import req_middleware from './middleware/req_token'

// routes
import routes from './routes'
import auth_routes from './routes/auth'
import view from './routes/view'
import method from './routes/operation'

const app = Express()
const RedisStore = connectRedis(session)

if (config.globals.__DEBUG__) {
  let compiler = webpack(webpackConfig)
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }))
  app.use(hotMiddleware(compiler))
  app.use(Express.static(path.join(__dirname, '../client/')))
}

// set the static dir
app.use(Express.static(path.join(__dirname, '../public')))
app.use(Express.static(path.join(__dirname, '../dist/')))
app.set('views', path.join(__dirname, 'views'))

// view engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'ejs')

// user middleware
// session
app.use(session({
  secret: config.globals.NODE_ENV,
  store: new RedisStore(Object.assign({}, config.redis, { ttl: 60 * 60 * 24 })), // 1天过期
  resave: true,
  saveUninitialized: true,
}))

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyTrimer())

// 要么换hash路由
// 要么就把所有的前端路由也加到这里
app.get(['/', '/login'], routes.index)
app.post('/auth/req_token', auth_routes.req_token)
app.use(req_middleware)
app.post('/login', auth_routes.login)
app.post('/auth/check_code', auth_routes.check_code)
app.post('/auth/get_menu', auth_routes.get_menu)
app.post('/list/:viewname', view.get_listviewdef)
app.post('/listdata/:viewname', view.get_listviewdata)
app.post('/dicdata/:dicType', view.get_dicitem)
app.post('/operation/run/:method', method.run_method)
app.post('/:viewname/create', view.get_createview)
// 引擎层

app.use((req, res) => {
  res
    .status(404)
    .send('Get lost?')
})

export default app
