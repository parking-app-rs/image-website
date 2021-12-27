import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mixpanel from 'mixpanel-browser';

import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const MIXPANEL_KEY = 'da7dc340b740d7cd77b6b01b45b864e9';
mixpanel.init(MIXPANEL_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App id={id} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// window.addEventListener('beforeunload', function (e) {
//   mixpanel.track('User left the site', {
//     id,
//   });
// });
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    mixpanel.track('User left the site', {
      id,
    });
  }
});

function pointermove_handler(ev) {
  mixpanel.track('User zoomed', {
    id,
  });
}

const appDiv = document.querySelector('.App');
appDiv.onpointermove = pointermove_handler;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
