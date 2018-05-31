import { Card, Spin, Table, Popconfirm } from 'antd'
import React from 'react'
import Com2Server from './../utils'
import SearchPanel from './../SearchPanel'

/**
 * 数据列表面板
 * 输入框部分引入了Search Panel处理
 * 列表使用Ant.Design自带的Table
 * 分页使用Ant.Design自带的NavBar
 * @author 老拐 <geyunfei@kakamf.com>
 * @date Feb 24th,2018
 * @version 1.0
 */

export default class ListPanel extends Com2Server {
  constructor(props) {
    super(props)
    this.onClickSearch = this.onClickSearch.bind(this)
    this.queryData = this.queryData.bind(this)
    this.exportData = this.exportData.bind(this)
    this.runFunction = this.runFunction.bind(this)
    this.onPageChanged = this.onPageChanged.bind(this)
    this._load = this._load.bind(this)
    this._renderMethod = this._renderMethod.bind(this)
    this.state.crumbs = props.crumbs
    let root = this
    this._load(props, (data) => {
      root.setState(data)
      root.queryData({}, 1, 30)
    })
  }

  _renderMethod(data, record) {
    if (data.enable === 'true' || data.enable === true) {
      return (
        <Popconfirm enable={false} title={`确定要进行${data.name}操作？`} placement="leftTop" onConfirm={() => this.runFunction(data, record, record.key)}>
          <a>{data.name}</a>
        </Popconfirm>)
    } else {
      return (<a disabled>{data.name}</a>)
    }

  }
  _load(nextProps, cb) {
    if (nextProps.url === this.state.url) {
      return
    }

    let pageInfo = {
      index: 1,
      pageSize: 30,
      count: 1,
      defaultCurrent: 1,
      total: 30,
      current: 1,
    }
    let state = {}
    state.pageInfo = pageInfo
    state.url = nextProps.url
    state.crumbs = nextProps.crumbs
    if (nextProps.url) {
      state.items = []
      state.loading = false
      this.post(nextProps.url, {}, (data) => {
        let cols = []
        data.data.viewdef.item.forEach((item, index) => {
          if (item.display) {
            cols.push({ title: item.label, dataIndex: item.display, key: `col-${index}` })
          } else {
            cols.push({ title: item.label, dataIndex: `data.${item.index}`, key: `col-${index}` })
          }

        })
        if (cols.length > 0) {
          cols[0].fixed = 'left'
        }
        if (data.data.viewdef.methods !== undefined) {
          data.data.viewdef.methods.forEach(
            (data, index) => {
              cols.push({
                title: data.name,
                fixed: 'right',
                dataIndex: `methods[${index}]`,
                width: 100,
                key: `col-m-${index}`,
                render: this._renderMethod,
              })
            },
          )
        }
        let inputs = []
        if (data.data.viewdef.filterinput) {
          console.log(data.data.viewdef.filterinput)
          data.data.viewdef.filterinput.forEach(
            (item, index) => {
              inputs.push(item)
            },
          )
        }
        state.cols = cols
        state.inputs = inputs
        state.title = data.data.viewdef.title
        state.viewname = data.data.viewname
        state.pageInfo = pageInfo
        cb && typeof cb === 'function' && cb(state)
      })
    }
  }
  onClickSearch(filter) {
    this.queryData(filter, 1, this.state.pageInfo.pageSize)
  }
  onPageChanged(page, pageSize) {
    this.queryData(this.state.filter, page, pageSize)
  }
  runFunction(method_def, record, e) {
    this.setState({
      dataloading: true,
    })
    let method = method_def.method
    this.post(`/operation/run/${method}`, {no: e }, (data) => {
      method_def.enable = false
      this.setState({
        dataloading: false,
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    let root = this
    this._load(nextProps, (state,
    ) => {
      root.setState(state)
      root.queryData({}, 1, state.pageInfo.pageSize)
    })

  }
  /**
   * 查询列表数据
   * @param {object} filter 筛选条件
   * @param {int} page 页码
   * @param {int} pageSize 每页大小
   */
  queryData(filter, page, pageSize) {
    this.setState({
      dataloading: true,
    })
    this.post(`../listdata/${this.state.viewname}`,
      {
        filter: filter,
        index: page,
        pageSize: pageSize,
      }, (data) => {
        console.log(data)
        let pageInfo = {
          pageCount: data.data.pageCount,
          current: data.data.pageIndex,
          pageSize: data.data.pageSize,
          total: data.data.totalSize,
        }
        this.setState({
          items: data.data.items,
          pageInfo: pageInfo,
          filter: filter,
          dataloading: false,
        })
      },
    )
  }
  // eslint-disable-next-line
  exportData(filter) {

  }
  renderChild() {
    console.log(this.state.crumbs)
    if (this.state.loading === true) {
      return (

        <Card title="加载中">
          <Spin>正在获取数据,请稍后</Spin>
        </Card>

      )
    } else {
      return (
        <div>
          <SearchPanel viewurl={this.state.url} inputs={this.state.inputs} title={this.state.title} onClickSearch={this.onClickSearch} />
          <Table columns={this.state.cols} loading={this.state.dataloading} dataSource={this.state.items} scroll={{ x: 1500 }} pagination={{ onChange: this.onPageChanged, onShowSizeChange: this.onPageChanged, showQuickJumper: true, showSizeChanger: true, ...this.state.pageInfo }} />
        </div>
      )

    }

  }
}
