import React from 'react';
import logo from './logo.svg';
import './App.css';

import Left from "./Left"
import Right from "./Right"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Microblogging App
        </p>
      </header>
      <div className="row">
        <div className="col s12 l6"><Left /></div>
        <div className="col s12 l6"><Right /></div>
      </div>
    </div>
  );
}

export default App;
