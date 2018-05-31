import React from 'react'
import {
  Layout,
  Row,
  Col,
  Card,
  Input,
  Button,
  Form,
  Icon,
} from 'antd'
import {
  Redirect,
} from 'react-router-dom'

import Com2Server from './utils'

const FormItem = Form.Item

const {
   Footer, Content,
} = Layout
/** *
 * 登录的组件
 * version 1.0
 * @author geyunfei@kakamf.com
 * @
 */
export default class LoginPanel extends Com2Server {

  handleSubmit = (e) => {
    e.preventDefault()
    this.post('/login', {
      userid: this.state.userid,
      pwd: this.state.pwd,

    }, (data) => {

      console.log(data.data.user)
      this.setState({
        login: true,
        user: data.data,
      })
    })

  }

  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      login: false,
      userid: ' ',
      pwd: ' ',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  renderChild() {
    if (this.state.login === false) {
      return (
        <Layout>
          <Content>
            <Layout style={{ padding: '30px' }}>
              <Row>
                <Col span={8} offset={8}>
                  <Card title="咔咔后台管理系统 v2.0">
                    <Form>
                      <FormItem >
                        <Input name="userid" value={this.state.userid} onChange={this.handleChange} prefix={<Icon type="user" style={{ fontSize: 13 }} />} id="user_id" />
                      </FormItem>
                      <FormItem>
                        <Input name="pwd" value={this.state.pwd} onChange={this.handleChange} type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} id="user_pwd" />
                      </FormItem>
                      <Button type="primary" onClick={this.handleSubmit} > 登录 </Button>
                      <Button type="ghost"> 重置 </Button>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Layout>
          </Content>
          <Footer>
            <p> Powerd by KAKA<Icon type="copyright" /> IT Team </p>
          </Footer>
        </Layout>
      )
    } else {
      return (
        <Redirect to={{
          pathname: '/',
          state: { user: this.state.user },
        }} />
      )
    }

  }

}

