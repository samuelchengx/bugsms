import { Card, Spin, Button, Form} from 'antd'
import _ from 'lodash'
import React from 'react'
import Com2Server from './../utils'
import ControlFactory from '../Controls/ControlFactory'
// import UploadPictures from '../Controls/UploadPictures'

const FormItem = Form.Item

export default class ItemPanel extends Com2Server {
  constructor(props) {
    super(props)
    this.runFunction = this.runFunction.bind(this)
    this._load = this._load.bind(this)
    this._renderMethod = this._renderMethod.bind(this)
    this.createInput = this.createInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
    let root = this
    this.state = {
      inputs: [],
      value: {},
      methods: [],
      crumbs: props.crumbs,
    }
    this._load(props, (data) => {
      root.setState(data)
    })
  }
  createInput(item, index) {
    return (
      <FormItem labelCol={{span: 3}} wrapperCol={{span: 6}} label={item.label} key={index}>
        {ControlFactory.createControl(_.merge(
            item,
          {
            id: index,
            name: item.field,
          }), this.handleChange.bind(this))}
      </FormItem>)
  }
  _renderMethod(data, key) {
    return (
      // eslint-disable-next-line
      <Button key={key + this.state.inputs.length} loading={this.state.loading} onClick={this.runFunction.bind(this, data)}>{data.title}</Button>
    )
  }
  _load(nextProps, cb) {
    if (nextProps.url === this.state.url) {
      return
    }
    let state = {}
    state.url = nextProps.url
    if (nextProps.url) {
      state.items = []
      state.loading = false
      this.post(nextProps.url, {}, (data) => {
        let inputs = []
        let methods = []
        data.data.viewdef.item.forEach((item, index) => {
          inputs.push(item)
        })
        if (data.data.viewdef.methods !== undefined) {
          data.data.viewdef.methods.forEach(
            (data, index) => {
              methods.push({
                title: data.name,
                method: data.method,
              })
            },
          )
        }
        state.inputs = inputs
        state.methods = methods
        state.title = data.data.viewdef.title
        state.viewname = data.data.viewname
        state.url = nextProps.url
        cb && typeof cb === 'function' && cb(state)
      })
    }
  }
  runFunction(method_def) {
    /*
    this.setState({
      dataloading: true,
    })*/
    console.log('run function')
    // let method = method_def.method
    console.log(this.state.value)
    /**
    this.setState({
      dataloading: false,
    })**/
    /** this.post(`/operation/run/${method}`, {no: e }, (data) => {
      method_def.enable = false
      this.setState({
        dataloading: false,
      })
    })**/
  }
  componentWillReceiveProps(nextProps) {
    let root = this
    if (nextProps.url === this.state.url) {
      console.log('not rend..')
      return
    }
    this._load(nextProps, (state,
    ) => {
      root.setState(state)
    })
  }
  //eslint-disable-next-line
  handleChange(event) {
    let value = this.state.value
    console.log('handel')
    value[event.target.name] = event.target.value
    console.log(this.state)
    this.setState({
      value: value,
    })
  }
  renderChild() {
    if (this.state.loading === true) {
      return (
        <Card title="加载中">
          <Spin>正在获取数据,请稍后</Spin>
        </Card>
      )
    } else {
      return (
        <Card title={this.state.title}>
          <Form>
            {
              this.state.inputs.map((item, index) => this.createInput(item, index))
            }
            {
              this.state.methods.map((item, index) => this._renderMethod(item, index))

            }
            <Button key={this.state.methods.length + this.state.inputs.length}>返回</Button>
          </Form>
        </Card>
      )
    }

  }
}
