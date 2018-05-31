import log4js from 'log4js'
import getConfig from '../../../config/log4js'

export default function geLogger(name) {
  log4js.configure(getConfig(name))
  let logger = log4js.getLogger(`${process.env.NODE_ENV} : `)
  let wrapperedLogger = {
    info: (...args) => {
      logger.info(args)
      console.log(args)
    },
    error: (...args) => {
      logger.error(args)
      console.error(args)
    },
    warn: (...args) => {
      logger.warn(args)
      console.warn(args)
    },
    fatal: (...args) => {
      logger.fatal(args)
      console.error(args)
    },
  }
  return wrapperedLogger
}
