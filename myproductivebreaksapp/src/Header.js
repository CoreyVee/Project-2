import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark">
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
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Favorites">Favorites</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/ProductivityTips">Tips</Nav.Link>
  </Nav.Item>
</Nav>
        </Navbar>
)
}
export default Header;