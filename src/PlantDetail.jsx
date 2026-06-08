import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  
  Button,
  Navbar,
  Nav
  
} from "react-bootstrap";
import { GiPlantRoots } from "react-icons/gi";
import {
  FiSun,
  FiThermometer,
  FiWind,
  FiArrowLeft,
  FiMoon,
  FiMessageCircle,
} from "react-icons/fi";
import { BsDropletHalf } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = `
  @import url('https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-cay-xanh-mam-non-cho-dien-thoai-2-inkythuatso-01-10-48-06.jpg');

  :root {
    --green-primary: #2d7a4f;
    --green-light: #e8f5ee;
    --green-accent: #4caf7d;
    --text-dark: #1a2e22;
    --text-muted: #6b7c74;
    --bg-page: #f7faf8;
    --card-bg: #ffffff;
    --border-light: #ddeee5;
  }

  body {
    background-color: var(--bg-page);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .plantify-navbar {
    background: #fff;
    border-bottom: 1px solid var(--border-light);
    padding: 12px 0;
  }

  .navbar-brand-text {
    font-family: 'Fraunces', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--green-primary) !important;
    letter-spacing: -0.3px;
  }

  .nav-link-custom {
    color: var(--text-dark) !important;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 6px 14px !important;
    border-radius: 8px;
    transition: background 0.2s, color 0.2s;
  }

  .nav-link-custom:hover {
    background: var(--green-light);
    color: var(--green-primary) !important;
  }

  .nav-link-custom.active {
    font-weight: 700;
    color: var(--green-primary) !important;
  }

  .btn-register {
    background: var(--green-primary);
    color: #fff !important;
    border: none;
    border-radius: 10px;
    padding: 7px 20px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background 0.2s, transform 0.1s;
  }

  .btn-register:hover {
    background: #23623e;
    transform: translateY(-1px);
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 0.9rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 0;
    transition: color 0.2s;
  }

  .back-btn:hover {
    color: var(--green-primary);
  }

  .plant-image-wrap {
    border-radius: 20px;
    overflow: hidden;
    height: 480px;
    background: #e0ece6;
  }

  .plant-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .badge-difficulty {
    background: var(--green-light) !important;
    color: var(--green-primary) !important;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 8px;
    padding: 5px 12px;
  }

  .plant-title {
    font-family: 'Fraunces', serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-dark);
    line-height: 1.1;
    margin: 10px 0 4px;
  }

  .plant-scientific {
    font-style: italic;
    color: var(--text-muted);
    font-size: 1rem;
    margin-bottom: 14px;
  }

  .tag-pill {
    display: inline-flex;
    align-items: center;
    background: #fff;
    border: 1px solid var(--border-light);
    border-radius: 999px;
    padding: 4px 14px;
    font-size: 0.83rem;
    color: var(--text-dark);
    font-weight: 500;
    margin-right: 8px;
    margin-bottom: 6px;
  }

  .plant-description {
    color: #3d5247;
    font-size: 0.97rem;
    line-height: 1.75;
    margin: 18px 0 28px;
  }

  .care-card {
    background: var(--card-bg);
    border: 1px solid var(--border-light);
    border-radius: 16px;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .care-card:hover {
    box-shadow: 0 4px 20px rgba(45,122,79,0.08);
    transform: translateY(-2px);
  }

  .care-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .care-label {
    font-size: 0.78rem;
    color: var(--text-muted);
    font-weight: 500;
    margin-bottom: 2px;
  }

  .care-value {
    font-size: 0.97rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .icon-water { background: #e8f2fb; color: #3a86c4; }
  .icon-sun   { background: #fff6e0; color: #e6a817; }
  .icon-temp  { background: #fdecea; color: #d94f3f; }
  .icon-humid { background: #e8f5ee; color: #2d7a4f; }

  .float-chat {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 52px;
    height: 52px;
    background: var(--green-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.4rem;
    box-shadow: 0 4px 18px rgba(45,122,79,0.35);
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    border: none;
  }

  .float-chat:hover {
    background: #23623e;
    transform: scale(1.08);
  }
`;

const careItems = [
  {
    icon: <BsDropletHalf size={22} />,
    iconClass: "icon-water",
    label: "Tưới nước",
    value: "7-10 ngày/lần",
  },
  {
    icon: <FiSun size={22} />,
    iconClass: "icon-sun",
    label: "Ánh sáng",
    value: "Ánh sáng gián tiếp",
  },
  {
    icon: <FiThermometer size={22} />,
    iconClass: "icon-temp",
    label: "Nhiệt độ",
    value: "21–25°C",
  },
  {
    icon: <FiWind size={22} />,
    iconClass: "icon-humid",
    label: "Độ ẩm",
    value: "60–80%",
  },
];

export default function PlantDetail() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <style>{styles}</style>

      {/* Navbar */}
      <Navbar className="plantify-navbar" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#" className="navbar-brand-text d-flex align-items-center gap-2">
            <GiPlantRoots size={26} color="#2d7a4f" />
            Plantify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto gap-1">
              {["Trang chủ", "Khám phá", "Gian hàng", "Bác sĩ AI", "Đồ thị tri thức", "Blog"].map(
                (item) => (
                  <Nav.Link
                    key={item}
                    href="#"
                    className={`nav-link-custom${item === "Bác sĩ AI" ? " active" : ""}`}
                  >
                    {item}
                  </Nav.Link>
                )
              )}
            </Nav>
            <Nav className="align-items-center gap-2">
              <button
                className="back-btn"
                onClick={() => setDarkMode(!darkMode)}
                title="Toggle theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <Nav.Link href="#" className="nav-link-custom">
                Hỏi AI
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Đăng nhập
              </Nav.Link>
              <Button className="btn-register">Đăng ký</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="py-4" style={{ maxWidth: 1100 }}>
        {/* Back */}
        <button className="back-btn mb-4" onClick={() => window.history.back()}>
          <FiArrowLeft size={16} />
          Quay lại
        </button>

        <Row className="g-5 align-items-start">
          {/* Left: Image */}
          <Col md={6}>
            <div className="plant-image-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Monstera_deliciosa2.jpg/800px-Monstera_deliciosa2.jpg"
                alt="Monstera Deliciosa"
              />
            </div>
          </Col>

          {/* Right: Info */}
          <Col md={6}>
            <Badge className="badge-difficulty mb-1">Dễ</Badge>

            <h1 className="plant-title">Monstera Deliciosa</h1>
            <p className="plant-scientific">Monstera deliciosa</p>

            <div className="mb-3">
              <span className="tag-pill">Cây Monstera</span>
              <span className="tag-pill">Trầu Bà Lá Xẻ</span>
            </div>

            <p className="plant-description">
              Monstera Deliciosa là loại cây cảnh nội thất phổ biến với lá xẻ độc đáo. Cây dễ
              trồng, thích hợp cho người mới bắt đầu và có khả năng thanh lọc không khí tốt.
            </p>

            {/* Care Cards */}
            <Row className="g-3">
              {careItems.map((item) => (
                <Col xs={6} key={item.label}>
                  <div className="care-card">
                    <div className={`care-icon-wrap ${item.iconClass}`}>{item.icon}</div>
                    <div>
                      <div className="care-label">{item.label}</div>
                      <div className="care-value">{item.value}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Floating Chat Button */}
      <button className="float-chat" title="Hỏi AI">
        <FiMessageCircle size={22} />
      </button>
    </>
  );
}