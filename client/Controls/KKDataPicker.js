import React from 'react'
import { DatePicker } from 'antd'
import Com2Server from './../utils'

export default class KKDatePicker extends Com2Server {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
    this.onSelectChange = this.onSelectChange.bind(this)
  }
  onSelectChange(value) {
    let cb = this.props.onChange
    cb && typeof cb === 'function' && cb(
      {
        target: {
          name: this.props.name,
          value: value,
        },
      },
    )
  }
  renderChild() {
    return (
      <DatePicker style={{ width: 161 }} key={this.props.key} name={this.props.name} onChange={this.onSelectChange} />
    )
  }
}
