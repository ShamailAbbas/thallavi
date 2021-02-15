import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../src/Reducers/reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
