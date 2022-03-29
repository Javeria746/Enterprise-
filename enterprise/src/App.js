import './App.css';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import greetprops from './greetprops';

function App() {
  return (
    <div className="App">
      <h1>something show</h1>
      <greetprops name = "Javeria" designation = "software engineer"/>
      <greetprops name = "Ayesha" designation = "quality engineer"/>
      <greetprops name = "Aemun" designation = "tester"/>
      
    </div>
  );
}

export default App;
