import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";


ReactDOM.render(
  //making  store for single source of truth and wrapping app component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

