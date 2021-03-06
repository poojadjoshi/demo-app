import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
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
          
        </a>
        <Button onClick={() => window.open("http://google.com")} variant="contained" style={{backgroundColor: '#06006A',color:'white', height: 40, width: 232}}>
        Yep It's Pooja - let's do it!
      </Button>
      </header>
    </div>
  );
}

export default App;
