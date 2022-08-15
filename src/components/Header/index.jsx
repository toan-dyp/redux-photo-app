import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="text-center" xs="2">
          <Col>
            <a
              className="header__link header__title"
              href="https://www.facebook.com/black.moba.4"
              target="_blank"
              rel="noopener noreferrer"
            >
              T4Y
            </a>
          </Col>
          <Col>
            <NavLink
              end
              to="/photos"
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
