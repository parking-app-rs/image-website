import { useEffect } from 'react';
import logo from './testmap.png';
import './App.css';
import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

function App() {
  useEffect(() => {
    mixpanel.track('User visited the site', {
      id,
    });
  });

  return (
    <div className="App">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
