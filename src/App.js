import { useEffect } from 'react';
import logo from './testmap.png';
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
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
