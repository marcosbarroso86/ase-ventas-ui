import React from 'react';
import NavBar from './components/navbar/navbar'
import AnalistaComercial from './views/analista-comercial/analista-comercial'
import AnalistaABM from './views/analista-abm/analista-abm'
import Administrador from './views/administrador/administrador'


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnalistaComercial />
      <AnalistaABM />
      <Administrador />
    </div>
  );
}

export default App;
