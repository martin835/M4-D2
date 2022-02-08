import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Bookstrify</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
          
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
