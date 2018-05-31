import request from '../framework/request'
import logger from '../framework/logger'
import env from '../../config/env'

function _buildUrl(subpath) {
  return subpath ? `${env.server.url}/${subpath}` : env.server.url
}

function get(url, params = {}) {
  return request.get(_buildUrl(url), params)
}

function post(url, params = {}) {
  return request.post(_buildUrl(url), params)
    .then((res) => {
      // 业务级的请求日志
      logger.info(`post: ${url}`, `params: ${JSON.stringify(params)}`, `response: ${JSON.stringify(res)}`)
      return res
    })
}

function getToken() {
  return request.post(_buildUrl('api/auth/token/require'))
    .then((res) => {
      // 业务级的请求日志
      logger.info('post: api/auth/token/require', `response: ${JSON.stringify(res)}`)
      return res
    })
}

export default {
  get,
  post,
  getToken,
}
