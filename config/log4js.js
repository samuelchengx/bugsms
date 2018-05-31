/**
 * log4js 的配置生成模块
 * 根据传入的 filename 生成不同的 log4js 配置
 */
const NODE_ENV = process.env.NODE_ENV

let config = {
  appenders: [{
    type: 'clustered',
    appenders: [{
      type: 'file',
      filename: 'logs/app.log',
      maxLogSize: 10485760,
      backups: 5,
      compress: true,
    }],
  }],
}

switch (NODE_ENV) {
  case 'development':
  default:
    config.appenders[0].appenders[0].compress = false // 开发日志不压缩
    config.appenders[0].appenders[0].backups = 0 // 开发日志不用备份
    break

  case 'test':
    config.appenders[0].appenders[0].compress = true // 测试站日志压缩
    config.appenders[0].appenders[0].backups = 1 // 测试站日志备份1份
    break
  case 'alpha':
  case 'production':
    config.appenders[0].appenders[0].compress = true // alpha和正式站日志压缩
    config.appenders[0].appenders[0].backups = 3 // alpha和正式站日志备份3份
    break
}

function getCfg(filename = 'app') {
  let res = Object.assign({}, config)
  res.appenders[0].appenders[0].filename = `logs/${filename}.log`
  return res
}

module.exports = getCfg
