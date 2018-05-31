const amqp = require('amqp')
const config = require('../../config/env').queue
var post = require('../dao/post')

let connection = amqp.createConnection(config.conn_option)

connection.on('error', (err) => {
  console.log(`connection error from RabbitMQ: ${err}`)
})

connection.on('ready', () => {
  connection.queue(config.queue_name, config.queue_option, (q) => {
    q.subscribe((message) => {
      console.log(message.data)
      let result = message.data.toString()
      try {
        let fmt_result = JSON.parse(result)
        var server = post.postToServer()
        server.post(
          'withoutmid/queue/callback',
          {
            queuedata: fmt_result,
          })
          .success((data) => {
            console.log(data)
          })
          .error((data) => {
            console.log(data)
          })

      } catch (err) {
        console.log(err)
      }

    })

  })

})

