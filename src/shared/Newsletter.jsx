import { Container, Row, Col } from "reactstrap";
import "./Newsletter.css";
import maleTourists from "../Assets/images/male-tourist.png";

function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                varius lectus sit amet orci volutpat interdum.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourists} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Newsletter;
