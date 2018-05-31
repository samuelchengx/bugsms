import React from 'react'
import { Input } from 'antd'
import ComboxInput from './ComboxInput'
import ModelInput from './ModelInput'
import InputType from '../../server/engine/input_type'
import DateRanger from './DateRanger'
import BooleanInput from './BooleanInput'
import RichTextInput from './RichTextInput'
import KKDatePicker from './KKDataPicker'

/**
 * 控件工厂
 * @author 老拐 <geyunfei@kakamf.com>
 * @version 1.0
 * @date Nov 20th,2017
 * 初始
 */

export default class ControlFactory {
  static createControl(props, onChangeHandle) {
    console.log(`create input: ${props.input} `)
    console.log(props)

    if (props.dictype) {
      /** 状态选择 */
      return <ComboxInput dictype={props.dictype} {...props} onChange={onChangeHandle} />
    }
    switch (props.input) {
      case InputType.COMMON_INPUT: /** 一般输入 */
        return <Input {...props} onChange={onChangeHandle} />
      case InputType.DATE_RANGER : /** 日期范围 */
        return <DateRanger {...props} onChange={onChangeHandle} />
      case InputType.MODEL_INPUT: /** 业务选择类 */
        return <ModelInput {...props} onChange={onChangeHandle} />
      case InputType.CHECK_BOX:
        return <BooleanInput {...props} onChange={onChangeHandle} />
      case InputType.COMMON_RICKTEXT:
        return <RichTextInput {...props} onChange={onChangeHandle} />
      case InputType.DATE_PICKER:
        return <KKDatePicker {...props} onChange={onChangeHandle} />
      default:
        return (
          <Input type="text" {...props} onChange={onChangeHandle} />
        )
    }

  }
}
