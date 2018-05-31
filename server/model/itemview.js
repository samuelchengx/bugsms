var config = require('../config/viewmap')
var viewengineer = require('../engine/view')
var listdata = require('../engine/listdata')

exports.getviewdef = function (viewname, cb) {
  if (config[viewname] !== undefined) {
    viewengineer.getcreateview(
      config[viewname], (view) => {
        cb && typeof cb === 'function' && cb(view)
      },
    )
  } else { console.log('no view defined') }
}

exports.queryviewdata = function (viewname, accesstoken, pageIndex, filter, cb, error) {
  if (config[viewname] !== undefined) {

    listdata.listdata(
      accesstoken,
      config[viewname],
      pageIndex,
      filter,
      (data) => {

        console.log('ls model')

        cb && typeof cb === 'function' && cb(data)
      }, error,
    )

  }

}
