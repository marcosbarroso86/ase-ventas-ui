import React from 'react';
import { Navbar , Nav} from 'react-bootstrap'
import { ABMPlatform } from '../../views/ABMPlatform/ABMPlatform';
import { ComercialPlatform } from '../../views/comercialPlatform/ComercialPlatform';
import { Administrator } from '../../views/administrador/Administrator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { orange } from 'color-name';

export const NavBar = () => {

  return (
    <Router>
        <Navbar bg="white" style={{borderBottom: '2px solid #e75300'}}>
        <Navbar.Brand>
          <img src={process.env.PUBLIC_URL + '/logo_ase.png'}  width="100" alt=""/>
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Link style={{ textDecoration: 'none' , marginRight: 10 , color: 'grey'}} to="/AnalistaABM">Bandeja ABM</Link>
            <Link style={{ textDecoration: 'none' , marginRight: 10 , color: 'grey'}} to="/AnalistaComercial">Bandeja Comercial</Link>
            <Link style={{ textDecoration: 'none' , color: 'grey'}} to="/Administrador">Bandeja Administrador</Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <span style={{ color: orange}}>APP VENTAS / ALTAS REMOTAS</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        
      
        <div className="container mt-2">

        <Switch>
          <Route path="/AnalistaABM">
            <ABMPlatform />
          </Route>
          <Route path="/AnalistaComercial">
            <ComercialPlatform />
          </Route>
          <Route path="/Administrador">
            <Administrator />
          </Route>
        </Switch>
        </div>
       </Router>    
    )
}



