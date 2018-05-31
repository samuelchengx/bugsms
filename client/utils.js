import React, { Component } from 'react'
import { Modal, Form, Input, message } from 'antd'
import {
  Redirect,
} from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import global from './common/global'
import config from '../config/env'

const FormItem = Form.Item

const TOKEN_KEY = config.client.header_key

const execFetch = (method, _url, data) => {

  let headers = {}
  headers['Content-Type'] = 'application/json'

  headers[TOKEN_KEY] = global.token
  return fetch(_url, {
    method,
    headers: headers,
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(res => res)
}

/**
 * 和服务器通信的组件
 * @author geyunfei@kakamf.com
 * @version 1.0
 * @date Oct 16th,2017
 * 继承，并且重写renderChild
 */
export default class Com2Server extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.post = this.post.bind(this)
    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.state = {
      reset: false,
    }
  }

  onOk = () => {
    this.setState({
      visible: false,
    })
  }

  onCancel = () => {
    this.setState({
      visible: false,
      chkcode: false,
    })
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmitCheckCode = () => {
    let root = this
    execFetch('POST', 'auth/check_code', {
      no: this.state.item,
      code: this.state.code,
    }).then(
      (data) => {
        if (data.code === 0) {
          let cb = root.state.callback
          cb && typeof cb === 'function' && cb(data)
          root.setState({
            chkcode: false,
          })
        } else {
          message.error(`操作错误,代码:${data.code},信息:${data.msg}`)
        }
      },
    )

  }
  onCancelCheckCode = () => {
    this.setState(
      {
        chkcode: false,
      },
    )
    message.info('操作已取消')
  }

  post = (url, data, cb) => {
    let root = this
    execFetch('POST', url, data)
      .then(
      (data) => {
        if (data.code === 0) {
          if (data._check_code) {
            this.setState({
              chkcode: true,
              behavior: data._check_code.behavior,
              item: data._check_code.item,
              callback: cb,
            })

          } else {
            cb && typeof cb === 'function' && cb(data)
          }
        } else {
          if (data.code === 800002 || data.code === 801014) {
            global.resetToken()
            this.setState({
              reset: true,
            })

          } else {
            message.error(`操作错误,代码:${data.code},信息:${data.msg}`)
          }

        }

      },
    )
      .catch(
      (error) => {
        console.log(error)
        root.setState({
          visible: true,
        })
      },
    )

  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    if (this.state.reset === true) {
      this.state.reset = false
      return (
        <Redirect to={{
          pathname: '/login',
        }} />)
    } else {
      return (
        <div>
          {this.renderChild()}
          <Modal title="当前操作需要验证" visible={this.state.chkcode} onOk={this.onSubmitCheckCode} onCancel={this.onCancelCheckCode} >
            <Form>
              <FormItem label="序号" {...formItemLayout}>
                <Input readonly="readonly" value={this.state.item} />
              </FormItem>
              <FormItem label="操作" {...formItemLayout}>
                <Input readonly="readonly" value={this.state.behavior} />
              </FormItem>
              <FormItem label="验证码" {...formItemLayout}>
                <Input name="code" placeholder="验证码" onChange={this.onChange} />
              </FormItem>
            </Form>
          </Modal>
        </div>
      )
    }
  }
}
