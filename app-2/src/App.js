import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const foodArr = ['Spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'];
  const listFood = foodArr.map((food) => <h2>{food}</h2>);

  return (
    <div className="App">
      <ul>{listFood}</ul>
    </div>
  );
}
export default App;
