import React from 'react';
import './App.css';
import Car from './components/Car';
import Bike from './components/Bike';

function App() {
  return (
    <div className="App">
      <h3>HOC</h3>
      <Car />
      <Bike />
    </div>
  );
}

export default App;
