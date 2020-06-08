import React, { Fragment } from 'react';
import { Navigation } from './routes/Navigation';
import TablaAnalistaComercial from './components/tabla/Tabla';
import DetailedExpansionPanel from './components/filtros/Filtros'


function App() {
  return (
    <Fragment>
        <Navigation />
          <DetailedExpansionPanel />
          <TablaAnalistaComercial />
    </Fragment>
  );
}

export default App;
