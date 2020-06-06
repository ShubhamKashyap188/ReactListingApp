import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Cakes from './Components/Cakes/Cakes';
import Flowers from './Components/Flowers/Flowers';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="green" collapseOnSelect expand="true" fixed="top" variant="dark">
            <Navbar.Brand to="/" as={Link}>
              <img
                src="https://m-i7.fnp.com/assets/images/logo-bb.png"
                width="120"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle className="pull-left" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="pull-sm-left ">
              <Nav className="">
                <Nav.Link to="/" as={Link}>Home</Nav.Link>
                <Nav.Link to="/about" as={Link}>About</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Cakes
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="/cakes" as={Link}>Chocolate Cakes</Dropdown.Item>
                    <Dropdown.Item to="/cakes" as={Link}>Vanilla Cakes</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Flowers
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="/flowers" as={Link}>Roses</Dropdown.Item>
                    <Dropdown.Item to="/flowers" as={Link}>Lilies</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cakes">
              <Cakes />
            </Route>
            <Route path="/flowers">
              <Flowers />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
