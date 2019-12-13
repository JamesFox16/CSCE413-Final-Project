import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

export default class MainAppBar extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">CTA Data</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/Avgwdriders">Data</Nav.Link>
              <Nav.Link href="/linesmap">Line Maps</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
        </Router>
      </>
    );
  }
}
