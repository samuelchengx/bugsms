import config from '../../config/env'

const TOKEN_KEY = config.client.header_key

export default function requestExtension(req, res, next) {

  console.log(req.url)
  let token = req.headers[TOKEN_KEY]
  console.log(TOKEN_KEY + token)
  if (token !== undefined) {
    req.token = token
    next()
  } else {
    res.send({ code: -6, msg: 'token requre' })
  }

}
