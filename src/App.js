import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import mixpanel from 'mixpanel-browser';

function App({ id }) {
  useEffect(() => {
    mixpanel.track('User visited the site', {
      id,
    });
  }, [id]);

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
