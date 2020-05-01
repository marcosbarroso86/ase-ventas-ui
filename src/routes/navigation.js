import AnalistaABM from "../views/analista-abm/analista-abm";
import AnalistaComercial from '../views/analista-comercial/analista-comercial'
import Administrador from "../views/administrador/administrador";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">AnalistaABM</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/AnalistaABM">
            <AnalistaABM />
          </Route>
          <Route path="/AnalistaComercial">
            <AnalistaComercial />
          </Route>
          <Route path="/Administrador">
            <Administrador />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
