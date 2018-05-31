import {Select, Spin} from 'antd'
import debounce from 'lodash.debounce'
import Com2Server from '../utils'

const Option = Select.Option

/**
 * 模型选择的输入框
 * autocomplete
 * @author 老拐 <geyunfei@kakamf.com>
 * @version 1.0
 * @date Nov 20th,2017
 * 初始搞定
 */
export default class ModelInput extends Com2Server {

  /**
   *
   * @param {*} props
   * field:"userid"
   * filterview:"userlist"
   * id:1
   * input:"model_input"
   * label:"用户"
   * name:"userid"
   */
  constructor(props) {
    super(props)
    this.onValueChange = this.onValueChange.bind(this)
    this.fetchData = debounce(this.fetchData, 1000)
    this.state = {
      fetching: false,
      items: [],
      dataloading: false,
    }
  }

  fetchData = (value) => {
    console.log('fetch')
    this.setState({
      dataloading: true,
    })
    let root = this
    this.post(`../listdata/${this.props.filterview}`,
      {
        filter: {
          name: value},
        index: 1,
        pageSize: 5,
      }, (data) => {
        console.log(data)
        const items = data.data.items.map(
          i => ({
            key: i.key,
            display: i.display,
            dataloading: false,
          }),
        )
        root.setState({
          items: items,
          dataloading: false,
        })
      },
    )
  }
  onValueChange(value) {
    console.log(value)
    this.setState(
      {
        items: [],
        dataloading: false,
      },
    )
    let cb = this.props.onChange
    cb && typeof cb === 'function' && cb(
      {
        target: {
          name: this.props.name,
          value: value.length !== undefined ? value[0] : value,
        },
      },
    )
  }

  renderChild() {
    return (
      <Select
        mode="multiple"
        notFoundContent={this.state.dataloading ? <Spin size="small" /> : null}
        style={{ width: 161 }}
        placeholder="选择"
        key={this.props.key}
        filterOption={false}
        showSearch
        name={this.props.name}
        onSearch={this.fetchData}
        onChange={this.onValueChange}>
        {
        this.state.items.map((item, index) => <Option key={item.key}>{item.display}</Option>)
      }

      </Select>)
  }
}
