var request = require('request')

function decode(s) {
  return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'))
}

function PostToServer(urlmake) {
  var owner = {}
  owner.jsonp = true
  owner.reqdecode = true
  var data = null
  var promise
  var errorInfo = null

  function post(method, postdata) {

    promise = new Promise(((resolve, reject) => {
      var url = urlmake(method)
      request.post(
        { url: url, body: postdata, json: true },
        (error, response, body) => {
          data = body
          console.log('body ')
          console.log(body)
          if (error !== undefined && error !== null) {
            console.log(error)
            errorInfo = error
          } else if (response.statusCode !== 200) {
            errorInfo = {
              code: -1,
              msg: 'http error',
            }
          } else {
            if ((data !== undefined && data !== null) && data.code !== 0) {
              errorInfo = data
            }
          }
          resolve()
        })
    }))
    return owner

  }
  function error(callback) {
    promise.then(() => {
      if (data === undefined) {
        throw new Error('error stack : please call post method first')
      }
      if (data.code !== 0) {
        callback(errorInfo)
      }
    })
    return owner
  }
  function success(callback) {
    promise.then(() => {
      if (data === undefined || data === null) {
        throw new Error('success statck : please call post method first')
      }
      console.log(data)
      if (data.code === 0) {
        callback(data)
      }
    })
    return owner
  }
  owner.post = post
  owner.error = error
  owner.success = success
  return owner
}

function GetFromServer(urlmake) {

  var owner = {}
  var data
  var errorInfo
  var getEnded = false
  owner.jsonp = true
  owner.reqdecode = true

  var promise
  function get(method, postdata) {
    promise = new Promise(((resolve, reject) => {
      var url = urlmake(method, postdata)

      request.get(url,
        (error, response, body) => {

          var str = ''
          var result = ''

          if (owner.jsonp) { str = body.substring(12, body.length - 2) }
          if (owner.reqdecode) { result = JSON.parse(decode(str)) }

          if (error !== undefined) {
            errorInfo = error
            console.log(error)
          } else {
            if (result.code !== 200 && result.code !== 0) {
              errorInfo = {
                code: result.code,
                msg: result.msg,
              }
            } else {
              data = result
              data.code = 0
            }

          }
          getEnded = true
          resolve()

        })

    }))
    return owner
  }

  function error(callback) {
    promise.then(() => {
      if (getEnded === false) {
        throw new Error('please call get method first')
      }
      if (errorInfo !== undefined) {
        callback(errorInfo)
      }

    })
    return owner
  }

  function success(callback) {
    promise.then(() => {
      if (getEnded === false) {
        throw new Error('pleas call get method first')
      }
      if (data !== undefined) {
        callback(data)
      }
    })
    return owner
  }
  owner.get = get
  owner.error = error
  owner.success = success
  return owner
}

exports.postToServer = function (urlmake) {
  return new PostToServer(urlmake)
}

exports.getFromServer = function (urlmake) {
  return new GetFromServer(urlmake)
}
