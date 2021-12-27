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

const generateThrottledFunctionToTrack = (msg) => {
  const trackZoomEventToMixpanel = () => {
    mixpanel.track(msg, {
      id,
    });
  };

  const throttledTrackZoomEventToMixpanel = throttle(
    trackZoomEventToMixpanel,
    THROTTLE_TIME_IN_MS,
  );

  return throttledTrackZoomEventToMixpanel;
};

let msg = 'User zoomed';
const trackZoom = generateThrottledFunctionToTrack(msg);

msg = 'User scrolled';
const trackScroll = generateThrottledFunctionToTrack(msg);

// set zoom event
window.onzoom = function (e) {
  // zoom event

  trackZoom();
};

// detect resize
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

window.addEventListener('touchmove', () => {
  trackScroll();
});

window.addEventListener('scroll', () => {
  trackScroll();
});
