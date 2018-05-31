/**
 * the http communcate componates.
 * Feb 13rd,2017
 * geyunfei@gmail.com
 **/
var http = require('http')
var https = require('https')

module.exports.get = function (url, callback) {
  http.get(url, (res) => {
    var resdata = ''
    res.on('data', (chunk) => {
      resdata += chunk
    })
    res.on('end', () => {
      if (callback !== undefined) {
        var obj = JSON.parse(resdata)
        callback(obj)
      }
    })
  })
}

module.exports.sget = function (url, callback) {
  https.get(url, (res) => {
    var resdata = ''
    res.on('data', (chunk) => {
      resdata += chunk
    })
    res.on('end', () => {
      if (callback !== undefined) {
        try {
          var obj = JSON.parse(resdata)
          callback(obj)
        } catch (e) {
          callback(resdata)
        }
      }
    })
  })
}

module.exports.spost = function (url, data, callback) {
  var req1 = https.request(url,
    (res) => {
      res.setEncoding('utf8')
      var alldata = ''
      res.on('data', (chunk) => {
        alldata = alldata + chunk
      })
      res.on('end', () => {
        try {

          var senddata = JSON.parse(alldata)
          callback(senddata)
        } catch (a) {
          //  console.log(method + ' ' + a);
          console.log('error')
          console.log(alldata)
        }

      })
    })
  req1.on('error', (e) => {
  })
  req1.write(JSON.stringify(data))
  req1.end()

}

module.exports.post = function (url, data, callback) {
  console.log('post')
  var req1 = http.request(url,
    (res) => {
      res.setEncoding('utf8')
      var alldata = ''
      console.log('ok')
      res.on('data', (chunk) => {
        alldata = alldata + chunk
      })
      res.on('end', () => {
        console.log('end')
        try {

          var senddata = JSON.parse(alldata)
          callback(senddata)
        } catch (a) {
          // console.log(method + ' ' + a);
          console.log(alldata)
        }

      })
    })
  req1.on('error', (e) => {
  })
  req1.write(JSON.stringify(data))
  req1.end()

}
