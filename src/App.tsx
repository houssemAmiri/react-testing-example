import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [heading, setHeading] = useState("CodeSweetly Test");

  const handleClick = () => {
    setHeading("A CodeSweetly Project");
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1>{heading}</h1>
        <button type="button" onClick={handleClick}>
          Update Heading
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://houssemamiri.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          Visit Houssem website
        </a>
      </header>
    </div>
  );
}

export default App;
