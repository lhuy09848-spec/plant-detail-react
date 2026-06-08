import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold text-success">
          🌿 Plantify
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link>Trang chủ</Nav.Link>
            <Nav.Link>Khám phá</Nav.Link>
            <Nav.Link>Gian hàng</Nav.Link>
            <Nav.Link>Bác sĩ AI</Nav.Link>
            <Nav.Link>Đồ thị tri thức</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button variant="outline-secondary">Hỏi AI</Button>
            <Button variant="outline-secondary">Đăng nhập</Button>
            <Button variant="success">Đăng ký</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;