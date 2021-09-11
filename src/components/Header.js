import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Cinibuzz</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Movies</Nav.Link>
          <Nav.Link href="">TV Shows</Nav.Link>
          <Nav.Link href="">Kids</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
