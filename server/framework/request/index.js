import url from 'url'
import request from 'request'
import env from '../../../config/env'

const config = env.server

function _request(method, url, params) {
  return new Promise((resolve, reject) => {
    if (!url) {
      return reject(new Error(
        `url invalid! method: ${method} url: ${url} params: ${JSON.stringify(params)}`,
      ))
    }

    if (!method || !method.toString()) {
      return reject(new Error(
        `http method invalid! method: ${method} url: ${url} params: ${JSON.stringify(params)}`,
      ))
    }

    method = method.toString().toLowerCase()

    // TODO suport more http method here
    let allowMethods = ['get', 'post']

    if (!~allowMethods.indexOf(method)) {
      return reject(new Error(
        `http method is not allowed! method: ${method} url: ${url} params: ${JSON.stringify(params)}`,
      ))
    }

    let option = {
      url: url,
      json: true,
    }

    if (method === 'get') option.qs = params || {}
    if (method === 'post') option.body = params || {}

    request[method](option, (err, res, body) => {

      if (err) {
        return reject(new Error(
          `request api failed! error: ${err} method: ${method} url: ${url} params: ${JSON.stringify(params)}`,
        ))
      }

      return resolve(body)
    })
  })
}

function get(url, params) {
  return _request('get', url, params)
}

function post(url, params) {
  return _request('post', __build_url(url), params)
}

function __build_url(method) {
  var returnUrl = {
    protocol: config.protocol,
    hostname: config.server,
    pathname: `${config.basepath}/${method}`,
    port: config.port,
  }
  console.log(returnUrl)
  console.log(url.format(returnUrl))
  return url.format(returnUrl)

}
export default {
  get,
  post,
}
