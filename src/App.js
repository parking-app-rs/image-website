import { useEffect } from 'react';
import logo from './testmap.png';
import './App.css';
import styled from 'styled-components';
import mixpanel from 'mixpanel-browser';

const Button = styled.button`
  background-color: #0276fd;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;
`;

function App({ id }) {
  useEffect(() => {
    mixpanel.track('User visited the site', {
      id,
    });
  }, [id]);

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
          <Button
            onClick={() => {
              mixpanel.track('User clicked YES', {
                id,
              });
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              mixpanel.track('User clicked NO', {
                id,
              });
            }}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
