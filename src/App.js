import { useState, useEffect } from 'react';
import logo from './testmap.png';
import './App.css';
import styled from 'styled-components';
import mixpanel from 'mixpanel-browser';

function App({ id }) {
  useEffect(() => {
    mixpanel.track('User visited the site', {
      id,
    });
  }, [id]);

  const [selected, setSelected] = useState('');

  return (
    <div>
      <img
        style={{
          width: '100%',
          minWidth: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={logo}
        alt="Map with nearby parking locations"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Was this helpful?</h1>
        <div>
          <button
            onClick={() => {
              console.log('yes');
              mixpanel.track('User clicked YES', {
                id,
              });
              setSelected('yes');
            }}
            className={selected === 'yes' ? 'selected' : ''}
          >
            Yes
          </button>
          <button
            onClick={() => {
              console.log('no');
              mixpanel.track('User clicked NO', {
                id,
              });
              setSelected('no');
            }}
            className={selected === 'no' ? 'selected' : ''}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
