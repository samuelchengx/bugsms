import config from '../config/viewmap'
import viewengineer from '../engine/view'

const get_create = (viewname, cb, error) => {
  let viewfile = config[viewname]
  console.log(`beign to get view def : ${viewfile}`)
  if (viewfile !== undefined) {
    viewengineer.getcreateview(viewfile, (data) => {
      cb && typeof cb === 'function' && cb(data)
    })
  } else {
    error && typeof error === 'function' && error({
      code: 90001,
      msg: '没有定义视图',
    })
  }
}
exports.get_create = get_create
