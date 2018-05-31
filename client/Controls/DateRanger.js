import React from 'react'
import { DatePicker } from 'antd'
import Com2Server from './../utils'

const { RangePicker } = DatePicker

export default class DateRanger extends Com2Server {

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
          value: [
            value[0].format('YYYY-MM-DD'),
            value[1].format('YYYY-MM-DD'),
          ],
        },
      },
    )
  }
  renderChild() {
    return (
      <RangePicker style={{ width: 161 }} key={this.props.key} name={this.props.name} onChange={this.onSelectChange} />
    )

  }
}
