import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand className="fw-bold fs-4">
          Love Shop
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mx-auto gap-4">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Women</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>
              <i className="bi bi-cart3 fs-5"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;