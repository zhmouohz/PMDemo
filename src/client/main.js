import 'regenerator-runtime/runtime'
import './my.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Show from './containers/Show'

const myDiv = document.createElement('div')
document.body.appendChild(myDiv)

render(
  <Provider store={store}>
    <Show />
  </Provider>,
  myDiv
)
