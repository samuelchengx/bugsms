var com2server = require('../dao/post')

let baseconfig = '../config/views/'

/**
 * 得到list的data
 * Now I'm in KAKA
 * March 18th,2017
 * geyunfei@kakamf.com
 * version 0.2
 *
 *
 *
 * yfge@bjsoway.com
 * Jan 3rd ,2017
 * version 0.1
 *
 * param :
 * lang - the language id ;
 * accessToken - the accessToken;
 * model - the model name ;
 * the callback return
 *
 */
exports.listdata = function (accessToken, viewname,
  page, pageSize, filter, cb, error) {
  var server = com2server.postToServer()
  var viewdef = require(baseconfig + viewname) // eslint-disable-line
  var result = {}
  var obj = {
    accessToken: accessToken,
    pageIndex: page,
    pageSize: pageSize,
    filters: filter,
  }
  server.post(
    viewdef.url, obj,
  )
    .success((data) => {
      result.totalSize = data.data.totalSize
      result.pageSize = data.data.pageSize
      result.pageIndex = data.data.pageIndex
      result.pageCount = parseInt(data.data.totalSize / result.pageSize, 10) +
        (data.data.totalSize % result.pageSize === 0 ? 0 : 1)
      result.items = []
      result.methodview = []
      let methosview = []
      if (data.data.items) {
        for (var i = 0; i < data.data.items.length; i = i + 1) {
          var item = {}
          /** 得到id  */
          if (viewdef.idfield) {
            item.key = data.data.items[i][viewdef.idfield]
          } else if (data.data.items[i].no) {
            item.key = data.data.items[i].no
          } else if (data.data.items[i].id) {
            item.key = data.data.items[i].id
          }

          if (viewdef.display) {
            item.display = data.data.items[i][viewdef.display]
          }
          item.data = {}
          Object.keys(viewdef.items).forEach(
            (p) => {
              item.data[viewdef.items[p].index] = data.data.items[i][viewdef.items[p].index]
            },
          )
          item.item = data.data.items[i]
          item.methods = []
          viewdef.methods !== undefined && viewdef.methods !== null && Object.keys(viewdef.methods).forEach((_p) => {
            let method = {}
            let m = viewdef.methods[_p]
            method.name = m.name
            if (m.method) { method.method = m.method }
            if (m.detailview) { method.detailview = m.detailview }
            if (m.view) {
              method.view = m.view
              methosview.push(m.view)
            }
            if (m.filter) {
              try {
                // eslint-disable-next-line
                let itemdata = item.item
                method.enable = eval(m.filter)  // eslint-disable-line
              } catch (e) {
                console.log(e)
              }
            } else { method.enable = true }
            item.methods.push(method)
          })
          result.items.push(item)
        }
      }
      data.data.items = result.items
      cb && typeof cb === 'function' && cb(data)
    })
    .error((err) => {
      error && typeof error === 'function' && error(err)
    })
}

