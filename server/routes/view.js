import viewfac from '../model/listview'
import itemviewfac from '../model/detailview'

const get_listviewdef = (req, res, next) => {
  let viewname = req.params.viewname

  viewfac.getviewdef(viewname
    , (viewdefine) => {
      res.status(200).send(
        {
          code: 0,
          data: {
            viewname: viewname,
            viewdef: viewdefine,
          },
        })
    },
  )

}

const get_listviewdata = (req, res, next) => {
  let viewname = req.params.viewname
  viewfac.queryviewdata(viewname, req.token, req.body.index, req.body.pageSize, req.body.filter, (data) => {
    res.send(data)
  }, (err) => {
    res.send(err)
  })
}

const get_dicitem = (req, res, next) => {
  let dicType = req.params.dicType
  viewfac.getdic(req.token, dicType,
    (data) => {
      res.send(data)
    },
    (err) => {
      res.send(err)
    })
}
const get_createview = (req, res, next) => {
  let viewname = req.params.viewname
  itemviewfac.get_create(viewname,
  (viewdef) => {
    res.status(200).send(
      {
        code: 0,
        data: {
          viewname,
          viewdef,
        },
      })
  }, (err) => {
    res.send(err)
  },
  )
}

export default {
  get_listviewdef,
  get_listviewdata,
  get_dicitem,
  get_createview,
}

