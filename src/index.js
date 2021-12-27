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

function pointermove_handler(ev) {
  mixpanel.track('User zoomed', {
    id,
  });
}

const appDiv = document.querySelector('.App');
appDiv.onpointermove = pointermove_handler;
