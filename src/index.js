import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './containers/App'
import InitialState from './api'

const store = createStore(rootReducer, InitialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)