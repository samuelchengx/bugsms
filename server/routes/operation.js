import method from '../engine/method'

const run_method = (req, res, next) => {

  let token = req.token
  let method_def = req.params.method
  let data = req.body
  method.exute_method(method_def, token, data, (data) => {
    res.send(data)
  }, (err) => { res.send(err) },
  )
}

export default {
  run_method,
}
