import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import RegisterImg from "../Assets/images/register.png";
import userIcon from "../Assets//images/user.png";
import { useState } from "react";

function Register() {
  const [credentials, setcredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setcredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelClick = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={RegisterImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2> Register</h2>
                <Form onSubmit={handelClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="UserName"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>{" "}
                  </p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Register;
