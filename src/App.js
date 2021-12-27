import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import mixpanel from 'mixpanel-browser';
import uuidv4 from 'uuid/v4';

const id = uuidv4();

function App() {
  useEffect(() => {
    mixpanel.track('User visited the site', {
      id,
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
