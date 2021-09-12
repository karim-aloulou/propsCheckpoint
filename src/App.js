import logo from './logo.svg';
import './App.css';
import {HandleName,Profile} from './profile/Profile';
import React from 'react';



function App() {
  const name="ALOULOU Karim"
  const profession=" Student"
  const lorem= "lorem"
  return (
    <div className="App">
      <Profile fullname={name} bio={lorem} profession={profession} />
      <HandleName props={name} /> 
    
    </div>
  );
}

export default App;
