import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mixpanel from 'mixpanel-browser';
import throttle from 'lodash';

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

const THROTTLE_TIME_IN_SEC = 1;
const THROTTLE_TIME_IN_MS = THROTTLE_TIME_IN_SEC * 1000;

const trackZoomEventToMixpanel = () => {
  mixpanel.track('User zoomed', {
    id,
  });
};

const throttledtrackZoomEventToMixpanel = throttle(
  trackZoomEventToMixpanel,
  THROTTLE_TIME_IN_MS,
);

// set zoom event
window.onzoom = function (e) {
  // zoom event
  throttledtrackZoomEventToMixpanel();
};

// detect resize
// (
//   function() {
//     var oldresize = window.onresize;
//     window.onresize = function(e) {
//       var event = window.event || e;
//       if(typeof(oldresize) === 'function' && !oldresize.call(window, event)) {
//         return false;
//       }
//       if(typeof(window.onzoom) === 'function') {
//         return window.onzoom.call(window, event);
//       }
//     }
// )();
var oldresize = window.onresize;
window.onresize = function (e) {
  var event = window.event || e;
  if (typeof oldresize === 'function' && !oldresize.call(window, event)) {
    return false;
  }
  if (typeof window.onzoom === 'function') {
    return window.onzoom.call(window, event);
  }
};

// function pointermove_handler(ev) {
//   mixpanel.track('User zoomed', {
//     id,
//   });
// }

// const appDiv = document.querySelector('.App');
// appDiv.onpointermove = pointermove_handler;
