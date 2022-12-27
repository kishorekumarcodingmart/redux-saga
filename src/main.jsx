import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'

import catState from './Redux/catState'
import catSaga from './Redux/catSaga'

const saga = createSagaMiddleware()
const store = configureStore({
  reducer : {
    cats : catState
  }, 
  middleware : [saga]
 })
saga.run(catSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
)
