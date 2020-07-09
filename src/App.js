import React from 'react';
import './App.css';
import logo from './logo.svg'

import Header from './organisms/Header';
import Photo from './molecules/Photo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Photo alt='aca la imagenssss' src={logo} />
    </div>
  );
}

export default App;
