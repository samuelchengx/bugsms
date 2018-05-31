import React from 'react'
import LzEditor from 'react-lz-editor'
import Com2Server from '../utils'

export default class RichTextInput extends Com2Server {
  constructor(props) {
    super(props)
    this.state = props
    this.editorRev = this.editorRev.bind(this)
  }
  editorRev() {
    console.log(this.state)

  }
  renderChild() {
    return (
      <LzEditor active cbReceiver={this.editorRev} />
    )
  }
}
