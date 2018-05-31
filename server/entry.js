require('babel-register')

const app = require('./app').default
const env = require('../config/env')

const port = env.port

app.listen(port, () => {
  console.log(`server start on port:${port} env:${process.env.NODE_ENV}`)
})
