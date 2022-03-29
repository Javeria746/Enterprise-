import './App.css';
import React from 'react';
import GreetProps from './Components/GreetProps';

function App() {
  return (
    <div className="App">
     
      <h1>something show</h1>
      <GreetProps name = "Javeria" designation = "software engineer">
      <p>this is children props aka properties</p></GreetProps>
      
      <GreetProps name = "Ayesha" designation = "tester"/>
      <GreetProps name = "Aemun" designation = "manager" />   
  
    </div>
  );
}

export default App;
