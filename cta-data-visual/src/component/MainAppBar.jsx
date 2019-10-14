import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class MainAppBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">CTA Data</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#data">Data</Nav.Link>
            <Nav.Link href="#lineMaps">Line Maps</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
