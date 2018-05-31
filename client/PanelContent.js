import { Layout, Breadcrumb, Card, Spin } from 'antd'
import React from 'react'
import Com2Server from './utils'
import ListPanel from './Panel/ListPanel'
import ItemPanel from './Panel/ItemPanel'

const { Content } = Layout

// eslint-disable-next-line
String.prototype.startWith = (str) => {
  let reg = new RegExp(`^${str}`)
  return reg.test(this)
}
// eslint-disable-next-line
String.prototype.endWith = (str) => {
  console.log('string end with')
  let reg = new RegExp(`${str}$`)
  return reg.test(this)
}

/**
 * 一般编辑的面板
 * @author 老拐 <geyunfei@kakamf.com>
 * @version 1.0
 */
export default class PanelContent extends Com2Server {
  constructor(props) {
    super(props)
    this._load = this._load.bind(this)
    this.state =
    {
      crumbs: props.crumbs,
    }
    let root = this
    this._load(props, (data) => {
      root.state = data
    })
  }
  _load(nextProps, cb) {
    if (nextProps.url === this.state.url) {
      return
    }
    let state = {}
    state.url = nextProps.url
    state.crumbs = nextProps.crumbs
    cb && typeof cb === 'function' && cb(state)
  }
  componentWillReceiveProps(nextProps) {
    let root = this
    this._load(nextProps, (state,
    ) => {
      root.setState(state)
    })
  }
  // eslint-disable-next-line
  endWith(str, val) {
    let reg = new RegExp(`${val}$`)
    return reg.test(str)
  }
  // eslint-disable-next-line
  renderChild() {
    if (this.state.loading === true) {
      return (
        <Content>
          <Card title="加载中">
            <Spin>正在获取数据,请稍后</Spin>
          </Card>
        </Content>
      )
    } else {
      return (
        <Content>
          <Breadcrumb style={{ margin: '12px 0' }}>
            {
              this.state.crumbs.map(
                (item, index) => (<Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>),
              )
            }
          </Breadcrumb>
          { this.endWith(this.state.url, 'create') === true ? (<ItemPanel url={this.state.url} />) : (<ListPanel url={this.state.url} />)}
        </Content>
      )
    }

  }
}
