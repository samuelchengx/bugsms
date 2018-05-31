/**
 * the view engeneer utils
 * yfge@Bjsoway.com
 * Jan 3rd,2017
 * version 0.1
 */
// var viewdef = require('../config/views/');
// var selectsys = require('../config/views/sys/select');
import input_type from './input_type'

var baseconfig = '../config/views/'

/**
 * get the list view defination
 * Now I'm in KAKA
 * geyunfei@kakamf.com
 * Mar 19th,2017
 * HIA HIA HIA !!!
 *
 * yfge@bjsoway.com
 * Jan 3rd,2017
 * version 0.1
 *
 *
 * 加入了新的逻辑以迎合Ant.Design
 * geyunfei <geyunfei@kakamf.com>
 * Feb 24th,2018
 *
 */
exports.getlistview = function (viewname, cb) {
  var view = {}
  var viewdef = require(baseconfig + viewname) // eslint-disable-line
  view.methodviews = []
  view.title = viewdef.title
  view.item = []
  view.filterinput = []
  let methodViews = []
  Object.keys(viewdef.items).forEach((p) => {
    var itemdef = viewdef.items[p]
    if (itemdef.label) {

      let col = { index: itemdef.index, label: itemdef.label }
      if (itemdef.display) {
        if (itemdef.index) {
          col.index = `${col.index}.${itemdef.display}`
        } else {
          col.display = itemdef.display
        }
      }
      view.item.push(col)
      if (itemdef.filter) {
        let item =
          {
            label: itemdef.label,
            filterview: itemdef.filterview,
            field: itemdef.index,
            dictype: itemdef.dictype,
            input: itemdef.input ? itemdef.input : 'input',
          }
        if (itemdef.filterview) {
          item.input = input_type.MODEL_INPUT
        }
        view.filterinput.push(item)
      }
    }

  })
  view.methods = []
  if (viewdef.methods) {
    Object.keys(viewdef.methods).forEach(
      (_p) => {
        let methodef = viewdef.methods[_p]
        if (methodef.view) {
          methodViews.push(methodef.view)
        }
        view.methods.push(
          {
            name: viewdef.methods[_p].name,
            base: viewdef.methods[_p].base,
            params: viewdef.methods[_p].params,
            method: viewdef.methods[_p].method,
          },
        )
      },
    )
  }

  if (viewdef.editview) {
    view.editview = viewdef.editview
  }
  if (viewdef.nav) {
    view.nav = viewdef.nav
  }

  if (methodViews.length > 0) {

    let i = 0
    while (i < methodViews.length) {
      // eslint-disable-next-line
      let methodview = require(baseconfig + methodViews[i])
      let methodview_result = {}
      methodview_result.title = methodview.title
      methodview_result.items = {}
      methodview_result.name = methodViews[i]
      Object.keys(methodview.items).forEach((p) => {
        var item = {}
        item.label = methodview.items[p].label
        item.field = methodview.items[p].index
        if (methodview.items[p].from) { item.from = methodview.items[p].from }
        if (methodview.items[p].readonly) { item.readonly = methodview.items[p].readonly } else
          if (methodview.items[p].input) { item.input = methodview.items[p].input } else if (methodview.items[p].richtext) { item.richtext = true } else if (methodview.items[p].dictype) {
            item.dictype = methodview.items[p].dictype
          } else { item.input = 'textbox' }
        methodview_result.items[p] = item
      },
    )
      methodview_result.methods = methodview.methods
      view.methodviews.push(methodview_result)

      i = i + 1
    }
    cb && typeof cb === 'function' && cb(view)

  } else {
    cb && typeof cb === 'function' && cb(view)
  }

}

exports.geturl = function (viewname) {
  //eslint-disable-next-line
  var viewdef = require(baseconfig + viewname)
  return viewdef.url
}

exports.getcfg = (viewname) => {
  let filename = baseconfig + viewname
  //eslint-disable-next-line
  let viewdef = require(filename)
  return viewdef
}

/**
 * get the create view defination
 * Now Powered BY KAKA
 * version 0.2
 * Mar 21th,2017
 * geyunfei@kakamf.com
 *
 * yfge@Bjsoway.com
 * Jan  4th,2017
 * version 0.1
 */
exports.getcreateview = function (viewname, cb) {

  var view = {}
  //eslint-disable-next-line
  var modeldef = require(baseconfig + viewname)
  if (modeldef === undefined) {
    throw new Error(`no defined of the view ${viewname}`)
  }

  view.item = []
  view.title = modeldef.title
  if (modeldef.resultview) {
    //eslint-disable-next-line
    var resultdef = require(baseconfig + modeldef.resultview)
    view.resultview = []
    Object.keys(resultdef.items).forEach((p) => {
      view.resultview.push(resultdef.items[p].label)
    })
  }
  view.selects = []
  var selectdiag = []
  if (modeldef.loadmethod) {
    view.loadmethod = modeldef.loadmethod
  }
  Object.keys(modeldef.items).forEach((_p) => {
    var item = {}
    item.label = modeldef.items[_p].label
    item.field = modeldef.items[_p].index
    if (modeldef.items[_p].selectview) {
      selectdiag.push(
        {
          name: modeldef.items[_p].index,
          view: modeldef.items[_p].selectview,
        })
      item.selectview = modeldef.items[_p].selectview
    } else if (modeldef.items[_p].input) {
      item.input = modeldef.items[_p].input
    } else if (modeldef.items[_p].richtext) {
      item.richtext = true
    } else if (modeldef.items[_p].dictype) {
      item.dictype = modeldef.items[_p].dictype
    } else {
      item.input = 'text'
    }
    view.item.push(item)
  })
  // add the methods
  view.methods = []
  if (modeldef.methods) {
    Object.keys(modeldef.methods).forEach((__) => {
      view.methods.push(
        {
          name: modeldef.methods[__].name,
          base: modeldef.methods[__].base,
          params: modeldef.methods[__].params,
          method: modeldef.methods[__].method,
        },
      )
    })
  }
/**
  var step = stepify()
  var taskname = []
  if (selectdiag.length > 0) {
    for (let i = 0; i < selectdiag.length; i = i + 1) {
      taskname.push(selectdiag[i].name)
      step.task(selectdiag[i].name)
        .step('s1', function (viewname, item) {
          var root = this
          getselectdiag(viewname, (viewdef) => {
            view.selects.push({ viewname, viewdef, item })
            root.done()
          })

        }, selectdiag[i].view, selectdiag[i].name)
    }

    step.task('ok')
      .step(0, function () {
        cb && typeof cb === 'function' && cb(view)
        this.done()
      })

    step.run(taskname, 'ok')

  } else {**/
  console.log(view)
  cb && typeof cb === 'function' && cb(view)
}

/**
 * get the select view defination
 * Powered By K
 * yfge@bjsoway.com
 * Jan 6th,2017
 * version 0.1
 */
var getselectdiag = function (viewname, cb) {
  //eslint-disable-next-line
  var viewdef = require(baseconfig + viewname)
  var view = {}
  view.title = viewdef.title
  view.item = []
  Object.keys(viewdef.items).forEach((p) => {
    view.item.push(viewdef.items[p].label)
  })
  cb && typeof cb === 'function' && cb(view)
}
exports.getselectdiag = getselectdiag
