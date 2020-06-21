import React from 'react';
import ReactDOM from 'react-dom';

//import stylesheets
import './styles/main.scss';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore } from "redux";

import pokerStatsReducer from "./store/reducers/pokerStats";

const store = createStore(
  pokerStatsReducer,
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
