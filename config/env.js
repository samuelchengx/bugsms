const path = require('path')

let env = process.env.NODE_ENV || 'development'

const HEADER_KEY = 'x-access-token'

const SESSION_KEY = 'x-session-token'

const PORT = 3000

const CONFIG = {
  production: {
    port: PORT, // 应用占用端口
    host: 'https://wx.kakamf.com', // 应用的域名或者地址
    redis: { // redis服务的配置
      host: 'localhost',
      port: 6379,
      db: 1,
    },
    server: {
      server: 'bkservice.kakamf.com',
      protocol: 'https',
      basepath: 'api',
      port: '443',
      imgserver: 'testapi.kakamf.com',
    },
    queue: {
      queue_name: 'kk.event',
      queue_option: {
        durable: true,
        autoDelete: false,
      },
      conn_option: {
        host: '10.171.133.2',
        port: 25672,
        login: 'kaka_mq',
        password: 'Pa88wordkkmf',
        vhost: 'kk_service_prod',
        connectionTimeout: 10000,
      },
    },
  },
  alpha: {
    port: PORT,
    host: 'https://alphawx.kakamf.com',
    redis: {
      host: 'localhost',
      port: 6379,
      db: 1,
    },
    server: {
      url: 'http://127.0.0.1/api/',

    },
    queue: {
      queue_name: 'kk.event.gyf',
      queue_option: {
        durable: true,
        autoDelete: false,
      },
      conn_option: {
        host: '112.126.71.91',
        port: 5672,
        login: 'kakatest',
        password: '123456',
        vhost: 'kk_service',
        connectionTimeout: 10000,
      },
    },
  },
  test: {
    port: PORT,
    host: 'https://testwx.kakamf.com',
    redis: {
      host: 'localhost',
      port: 6379,
      password: '15bfe2510b2f5ecb53b9f91cf8135c000b6e096f892ec6dacc183bdee4aeac25',
      db: 1,
    },
    server: {
      server: '127.0.0.1',
      protocol: 'http',
      basepath: 'api',
      port: '8080',
      imgserver: 'testapi.kakamf.com',
    },
    queue: {
      queue_name: 'kk.event.gyf',
      queue_option: {
        durable: true,
        autoDelete: false,
      },
      conn_option: {
        host: '112.126.71.91',
        port: 5672,
        login: 'kakatest',
        password: '123456',
        vhost: 'kk_service',
        connectionTimeout: 10000,
      },
    },
  },
  development: {
    port: PORT,
    host: 'http://localhost:8089',
    redis: {
      host: 'localhost',
      port: 6379,
      db: 1,
    },
    server: {
      server: '127.0.0.1',
      protocol: 'http',
      basepath: 'api',
      port: '8080',
      imgserver: 'testapi.kakamf.com',
    },
    queue: {
      queue_name: 'kk.event.gyf',
      queue_option: {
        durable: true,
        autoDelete: false,
      },
      conn_option: {
        host: '112.126.71.91',
        port: 5672,
        login: 'kakatest',
        password: '123456',
        vhost: 'kk_service',
        connectionTimeout: 10000,
      },
    },
  },
}

let config = Object.assign({}, CONFIG[env], {
  env,
  path_base: path.resolve(__dirname, '..'),
  dir_client: 'client',
  dir_dist: 'public/dist',
})

function base(...params) {
  const args = [config.path_base].concat([].slice.call(params))
  return path.resolve(...args)
}

config.utils_paths = {
  base: base,
  client: base.bind(null, config.dir_client),
  dist: base.bind(null, config.dir_dist),
}

config.globals = {
  'NODE_ENV': config.env,
  '__DEBUG__': config.env === 'development',
}

config.client = {
  header_key: HEADER_KEY,
  session_key: SESSION_KEY,
}
module.exports = config
