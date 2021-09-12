import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="none" variant="light">
      <Container>
        <Navbar.Brand href="/" className="brand">
          Cinibuzz
        </Navbar.Brand>
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
