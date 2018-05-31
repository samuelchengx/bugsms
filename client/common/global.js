import config from '../../config/env'
import request from '../common/request'

const session_key = config.client.session_key

const post = request.execFetch

class Global {
  constructor() {
    // eslint-disable-next-line
    this.token = sessionStorage[session_key]
    console.log(this.token)
    if (!this.token) {
      this.resetToken()
    }
  }
  resetToken() {
    let root = this
    post('POST', '/auth/req_token', {}).then(
      (body) => {
        root.token = body.accessToken
        //eslint-disable-next-line
        sessionStorage[session_key] = root.token
      },
    )
  }
  getToken() {
    return this.token
  }
}

export default new Global()
