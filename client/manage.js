import React from 'react'
import { Layout, Card, Spin } from 'antd'
import {
  Redirect,
} from 'react-router-dom'

import Com2Server from './utils'
import NavHeader from './NavHeader'
import NavSider from './NavSider'
import PanelContent from './PanelContent'
import PanelFactory from './Panel/PanelFactory'

const { Content, Sider } = Layout

// eslint-disable-next-line
String.prototype.startWith = (str) => {
  let reg = new RegExp(`^${str}`)
  return reg.test(this)
}
// eslint-disable-next-line
String.prototype.endWith = (str) => {
  let reg = new RegExp(`${str}$`)
  return reg.test(this)
}
/**
 * 主组件
 * @author geyunfei@kakamf.com
 * @version 1.0
 * @date Oct 18th,2017
 * @date Nov 29th,2017
 * 加入导航
 */
export default class Main extends Com2Server {

  constructor(props) {
    super(props)

    this.state = { user: props.location.state ? props.location.state.user : undefined, topPanel: true, loading: true }
    this.onClickTopNav = this.onClickTopNav.bind(this)
    this.onClickItem = this.onClickItem.bind(this)
    this.crumbs = []
    this.secCrumbs = []
    this.topName = ''
    this.fac = new PanelFactory({})
  }
  // eslint-disable-next-line
  getMainPanel(topPanel, view) {
    if (topPanel) {
      return PanelFactory.createPanel([1, 2, 3, 4, 5, 6])
    } else {
      return <PanelContent url={view} crumbs={this.crumbs.concat(this.secCrumbs)} />
    }
  }

  onClickTopNav(key, name) {
    this.setState({
      siderItems: key,
      topPanel: true,
    })
    this.topName = name
    this.crumbs = [name]
  }

  onClickItem(url, item) {
    this.secCrumbs = item
    this.setState({
      currentView: url,
      topPanel: false,
    })
  }
  componentDidMount() {
    let root = this
    this.post('/auth/get_menu', {}, (data) => {
      root.setState(
        {
          menus: data.data,
        },
      )
      root.setState(
        {
          loading: false,
        },
      )
    })
  }
  renderChild() {
    if (this.state.user === undefined) {
      return (
        <Redirect to={{
          pathname: '/login',
        }} />)
    } else if (this.state.loading === true) {
      return (
        <Layout>
          <Content>
            <Card title="加载中">
              <Spin>正在获取数据,请稍后</Spin>
            </Card>
          </Content>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <NavHeader key="nav_header" loadComplete={this.headerLoadComplete} onClickNav={this.onClickTopNav} items={this.state.menus} />
          <Layout key="nav_main">
            <Sider collapsible key="nav_sider" style={{ background: '#fff' }}>
              <NavSider loadComplete={this.siderLoadComplete} onClick={this.onClickItem} items={this.state.siderItems} />
            </Sider>
            <Layout key="nav_layout">
              {this.getMainPanel(this.state.topPanel, this.state.currentView)}
            </Layout>
          </Layout>
        </Layout>

      )
    }
  }

}
