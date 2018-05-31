import { Modal } from 'antd'
import React from 'react'

export default class ErrDiag extends React.Component {

  constructor(props) {

    super(props)
    this.props = props
    this.post = this.post.bind(this)
    this.onOk = this.onOk.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.state = { visible: false }

  }

  onOk = () => {
    this.setState({
      visible: false,
    })
  }

  onCancel = () => {
    this.setState({
      visible: false,
    })
  }

  getReq = () => {

  }
  post = (url, data) => {
    this.setState({
      visible: true,
    })

  }

  render() {

    return (
      <Modal title="错误提示" visible={this.state.visible} onOk={this.onOk} onCancel={this.onCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )

  }
}
