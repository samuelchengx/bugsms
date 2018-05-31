import fetch from 'isomorphic-fetch'
import config from '../../config/env'

const TOKEN_KEY = config.client.header_key
//eslint-disable-next-line
const execFetch = (method, _url, data) => {

  let headers = {}
  headers['Content-Type'] = 'application/json'
  headers[TOKEN_KEY] = global.token
  return fetch(_url, {
    method,
    headers: headers,
    body: JSON.stringify(data),
  })
}

export default class Server {
  constructor(url, data) {
    this.url = url
    this.data = data
  }

}
