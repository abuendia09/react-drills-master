import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  return (
    <div className="App">
      <input onChange={(event) => setMessage(event.target.value)} />
      <p>{message}</p>
    </div>
  );
}

export default App;
