import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import store from './state/store'
import {persistor} from './state/store'



ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor = {persistor}>
          <App />
       </PersistGate>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
