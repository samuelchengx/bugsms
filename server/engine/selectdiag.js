let post = require('../dao/post')
let view = require('./view')

var commonQuery = function (accessToken, lang, viewName, pageIndex, pageSize, queryStr, callback, error) {
  view.getselectdiag(lang, viewName, (viewdef) => {
    console.log('query')
    var server = post.postToServer()
    server.post(viewdef.url,
      {
        lang: lang,
        accessToken: accessToken,
        pageIndex: pageIndex,
        pageSize: pageSize,
        filters: {},
      },
    ).success((data) => {
      var returndata = data
      returndata.display = []
      var properties = []
      for (var i = 0; i < viewdef.items.length; i = i + 1) {
        var item = viewdef.items[i]
        returndata.display.push(item.display)
        properties.push(item.name)
      }
      var items = data.items
      returndata.items = []
      var index = 0
      while (index < items.length) {
        var _item = items[index]
        var addItem = {}
        addItem.id = _item.id
        addItem.data = {}
        for (var t = 0; t < properties.length; t = t + 1) {
          var p = properties[t]
          addItem.data[p] = _item[p]
        }
        returndata.items.push(addItem)
        index = index + 1
      }
      returndata.totalSize = parseInt(data.totalSize, 10)
      if (pageIndex === undefined) { returndata.page = 1 } else { returndata.page = parseInt(pageIndex, 10) }
      returndata.pageCount = parseInt(returndata.totalSize / pageSize, 10) +
        (returndata.totalSize % pageSize === 0 ? 0 : 1)
      callback(returndata)

    })
      .error((data) => {
        error(data)
      })
  })
}
exports.commonQuery = commonQuery
