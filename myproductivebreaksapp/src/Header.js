import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark" sticky='top'>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={require("./Images/relax.png")}
                alt=""
                width="35"
                height="35"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Container>
          <Nav
  defaultActiveKey="/" as='ul'>
  <Nav.Item as='li'>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as='li'>
    <Nav.Link href="/Favorites">Favorites</Nav.Link>
  </Nav.Item>
  <Nav.Item as='li'>
    <Nav.Link href="/ProductivityTips">Tips</Nav.Link>
  </Nav.Item>
</Nav>
        </Navbar>
)
}
export default Header;