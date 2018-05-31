import config from '../config/viewmap'
import viewengineer from '../engine/view'
import listdata from '../engine/listdata'
import dicdata from '../engine/dictionary'

exports.getviewdef = function (viewname, cb) {
  console.log(viewname)
  if (config[viewname] !== undefined) {
    viewengineer.getlistview(
      config[viewname], (view) => {
        console.log(view)
        cb && typeof cb === 'function' && cb(view)
      },
    )
  } else { console.log('no view defined') }
}
exports.getviewurl = function (viewname) {
  console.log(viewname)
  if (config[viewname] !== undefined) {
    return viewengineer.geturl(
      config[viewname])
  }

}

exports.queryviewdata = function (viewname, accesstoken, pageIndex, pageSize, filter, cb, error) {
  if (config[viewname] !== undefined) {
    listdata.listdata(
      accesstoken,
      config[viewname],
      pageIndex,
      pageSize,
      filter,
      (data) => {
        cb && typeof cb === 'function' && cb(data)
      }, (err) => {

        error && typeof error === 'function' && error(err)
      },
    )
  }

}

exports.getdic = (accesstoken, dictype, cb, error) => {
  dicdata.getDictionary(accesstoken, dictype,
    (data) => {
      cb && typeof cb === 'function' && cb(data)
    },
    (err) => {
      error && typeof error === 'function' && error(err)
    })
}

exports.getcfg = (viewname) => {
  if (config[viewname] !== undefined) { return viewengineer.getcfg(config[viewname]) }

}
