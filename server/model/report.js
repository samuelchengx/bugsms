var com2server = require('../dao/post')
const listview = require('../model/listview')

let make_report = (accessToken, viewname, query, cb, error) => {
  var server = com2server.postToServer()

  console.log(viewname)

  let cfg = listview.getcfg(viewname)
  console.log('get ok ')
  let url = cfg.url

  let map = {}

  Object.keys(cfg.items).forEach((p) => {
    map[cfg.items[p].label] = cfg.items[p].index
    if (cfg.items[p].display) {
      map[cfg.items[p].label] = `${map[cfg.items[p].label]}.${cfg.items[p].display}`
    }
  })

  let sendQuery = {}
  Object.keys(query).forEach((p) => {
    let p1 = p
    sendQuery[`${p1}`] = query[p]
  })

  server.post('v2/admin/report/makereport',
    {
      accessToken: accessToken,
      url: url,
      queryfilter: sendQuery,
      map: map,

    })
    .success(cb)
    .error(error)

}

exports.make_report = make_report
