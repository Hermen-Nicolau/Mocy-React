import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="success">
              <div className="container">
                  <NavbarBrand href="/">The Ministry of Cycling</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

export default App;

