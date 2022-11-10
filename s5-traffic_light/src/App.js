import './App.css';
import Light from './components/Light/Light';
import React, {useState} from 'react';
import TrafficLight from './components/TrafficLight/TrafficLight';

function App() {
  return (
    <div className="App">
      <TrafficLight/>
    </div>
  );
}

export default App;
