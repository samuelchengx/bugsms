import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  // Link,
} from 'react-router-dom'

import LoginPanel from './login'
import Main from './manage'

const routes = [
  {
    path: '/login',
    component: LoginPanel,
  },
  {
    path: '/',
    component: Main,
  },
]

export default class RouterCfg extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          {
            routes.map(((item, i) => (
              <Route path={item.path} exact component={item.component} key={i} />
            )))
          }
        </div>
      </Router>
    )
  }
}
