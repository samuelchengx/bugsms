import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu
/**
 * 侧边的菜单栏
 * @author 老拐 <geyunfei@kakamf.com>
 * @version 1.0
 * @date Nov 29th,2017
 * 加入了点击的标题
 */
export default class NavSider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.returnMenus = this.returnMenus.bind(this)
    this.onClick = this.onClick.bind(this)
    let items = this.props.items
    if (Array.isArray(items)) {
      this.state.items = items
    } else {
      this.state.items = []
    }
    this.crumbs = []
  }
  state = {
    collapsed: false,
  }
  componentDidMount() {
    this.props && this.props.loadComplete && typeof this.props.loadComplete === 'function' && this.props.loadComplete()
  }
  componentWillReceiveProps(nextProps) {
    let items = nextProps.items
    if (Array.isArray(items)) {
      this.state.items = items
    } else {
      this.state.items = []
    }
  }
  onClick(e) {
    if (this.props && this.props.onClick) {
      let b = this.props.onClick
      b && typeof b === 'function' && b(e.item.props.kk_url, e.item.props.kk_name)
    }
  }
 // eslint-disable-next-line
  returnMenus(item, index) {
    if (item.items && item.items.length > 0) {
      return (<SubMenu key={item.id} kk_name={item.name} title={<span>{item.name}</span>} />)
    } else {
      return (<Menu.Item key={item.id} kk_name={[item.name]} kk_url={item.url} >
        <Icon type="appstore" /><span>{item.name}</span></Menu.Item>)
    }
  }
  render() {
    return (
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        onClick={this.onClick}
          >
        {this.state.items.map((item, index) => (
            this.returnMenus(item, index)
          ))}
      </Menu>
    )
  }
}
