// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Imporing CSS
import './index.css';

// Redux - Thunk
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Imporing Reducers
import cryptosReducer from './reducers/cryptosReducer'

import reportWebVitals from './reportWebVitals';

// Creating Store
const store = createStore(cryptosReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
