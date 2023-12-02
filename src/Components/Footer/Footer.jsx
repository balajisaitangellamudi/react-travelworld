import "./Footer.css";
import { Row, Col, Container, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../Assets/images/logo.png";
function Footer() {
  const year = new Date().getFullYear();
  const quik__Links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tour",
      display: "Tours",
    },
  ];
  const quik__Links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  return (
    <Container className="footer">
      <Row>
        <Col lg="3">
          <div className="logo">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              varius lectus sit amet orci volutpat interdum.
            </p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-linkedin-box-fill"></i>{" "}
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
            {quik__Links.map((item, index) => (
              <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {quik__Links2.map((item, index) => (
              <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>
          <ListGroup className="footer__quick-links">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                Address:
              </h6>
              <p className="mb-0">Hyderabd,India</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                Email:
              </h6>
              <p className="mb-0">balajisaitangellamudi@gmail.com</p>
            </ListGroupItem>{" "}
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                Phone:
              </h6>
              <p className="mb-0">+91 8143606368</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="12  " className="text-center pt-5">
          <p className="copyright">
            Copyright {year}, Design & Developed by Balaji Sai Tangellamudi. All
            rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
