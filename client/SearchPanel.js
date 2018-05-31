import React from 'react'
import { Form, Button, Card, Col, Row } from 'antd'
import _ from 'lodash'
import Com2Server from './utils'
import ControlFactory from './Controls/ControlFactory'

const FormItem = Form.Item

export default class SearchPanel extends Com2Server {
  constructor(props) {
    super(props)
    this.__getState = this.__getState.bind(this)
    let state = this.__getState(props)
    state.title = '搜索'
    if (props.title) {
      state.title = process.title
    }

    if (props.onClickSearch) {
      state.onClickSearch = props.onClickSearch
    }
    if (props.onClickExport) {
      state.onClickExport = props.onClickExport
    }

    if (props.viewurl) {
      state.url = props.viewurl
    }
    this.createInput = this.createInput.bind(this)
    this.onClickSearch = this.onClickSearch.bind(this)
    this.onClickReset = this.onClickReset.bind(this)
    this.onClickExport = this.onClickExport.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = state

  }
  handleChange(event) {
    let filter = this.state.filter
    filter[event.target.name] = event.target.value
    this.setState({
      filter: filter,
    })
  }
  /**
   * 点击搜索
   */
  onClickSearch() {
    console.log('search')

    let cb = this.state.onClickSearch
    let filter = {}
    Object.keys(this.state.filter).forEach((p) => {
      this.state.filter[p] && (filter[p] = this.state.filter[p])
    })
    cb && typeof cb === 'function' && cb(filter)
  }
  /**
   * 点击重置
   */
  onClickReset() {

    let filter = this.state.filter
    Object.keys(filter).forEach((p) => {
      filter[p] = undefined
    })
    this.setState({
      filter: filter,
    })
  }
  /**
   * 点击导出
   */
  onClickExport() {
    let cb = this.state.onClickExport
    let filter = {}
    Object.keys(this.state.filter).forEach(
      (p) => {
        this.state.filter[p] && (filter[p] = this.state.filter[p])
      })
    cb && typeof cb === 'function' && cb(filter)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState(
        this.__getState(nextProps),
      )
  }
  __getState(nextProps) {
    let state = {}
    if (nextProps.inputs) {
      state.inputs = nextProps.inputs
      let filter = this.state.filter
      if (!filter) { filter = {} }
      nextProps.inputs.forEach((item) => {
        if (!filter[item.field]) {
          filter[item.field] = undefined
        }
      })
      state.filter = filter
    }
    state.url = nextProps.viewurl
    return state
  }
  createInput(item, index) {
    return (
      <Col span={8} key={index} >
        <FormItem label={item.label} key={index}>
          {ControlFactory.createControl(_.merge(
            item,
            {
              id: index,
              name: item.field,
              value: this.state.filter[item.field],
            }), this.handleChange)}
        </FormItem>
      </Col>
    )
  }
  renderChild() {
    if (this.state.inputs && this.state.inputs.length > 0) {
      return (
        <Card >
          <Form layout="inline">
            <Row>
              {
                this.state.inputs.map((item, index) => this.createInput(item, index))}
            </Row>
            <Row>
              <Button onClick={this.onClickSearch}>搜索</Button>
              <Button onClick={this.onClickReset}>重置</Button>
              <Button onClick={this.onClickExport}>导出</Button>
            </Row>
          </Form>
        </Card>
      )
    } else {
      return (
        <Card >
          <Form layout="inline">
            <Row>
              <Button onClick={this.onClickSearch}>刷新</Button>
            </Row>
          </Form>
        </Card>
      )
    }
  }
}
