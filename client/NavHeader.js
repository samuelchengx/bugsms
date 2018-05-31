import React from 'react'

import { Layout, Menu } from 'antd'

import { Link } from 'react-router-dom'

import Com2Server from './utils'

const { Header } = Layout

/**
 * 顶部导航栏
 * @author geyunfei@kakamf.com
 * @version 0.1
 * @date Oct 18th,2017
 * @date Nov 29th,2017
 * 回调加入菜单名称
 */
export default class NavHeader extends Com2Server {

  constructor(props) {
    super(props)
    this.state = {}
    this.onClick = this.onClick.bind(this)
    let items = props.items
    if (Array.isArray(items)) {
      this.state.items = items
    } else {
      this.state.items = []
    }

  }
  onClick(e) {
    let cb = this.props.onClickNav
    cb && typeof cb === 'function' && cb(e.item.props.kk_chidItem, e.item.props.kk_name)

  }
  componentDidMount() {
    this.props.loadComplete && typeof this.props.loadComplete === 'function' && this.props.loadComplete()
  }
  renderChild() {
    return (
      <Header>
        <div className="logo" style={{ height: 64, float: 'left' }} >
          <title> 后台管理系统</title>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
          onClick={this.onClick}
        >
          <Menu.Item key="-1" keyPath="/">首页</Menu.Item>
          {this.state.items.map((item, index) => <Menu.Item key={item.id} kk_name={item.name} kk_chidItem={item.items}>{item.name}</Menu.Item>)}
          <Menu.Item key="-2">
            <Link to="/login">退出</Link>
          </Menu.Item>
        </Menu>
      </Header>
    )

  }
}
