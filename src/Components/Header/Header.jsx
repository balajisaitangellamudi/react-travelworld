import React, { useEffect, useRef } from "react";
import { Button, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import logo from "../../Assets/images/logo.png";
import "./Header.css";

const navLinks = [
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
function Header() {
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc());
  });
  return (
    <header className="header" ref={headerRef}>
      <Container col-12 col-md-12 col-lg-12 col-xl-12>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo ">
              <img src={logo} alt="logo" />
            </div>

            {/* Navigation Menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {navLinks.map((item, index) => (
                  <li className="nav__items" key={index}>
                    {/* Use NavLink with activeClassName */}
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="nav-right d-flex align-items-center gap-4">
              <div className="nav-btns d-flex align-items-center gap-4"></div>
              <Button className="btn secondary__btn">
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button className="btn primary__btn">
                <NavLink to="/register">Register</NavLink>
              </Button>
            </div>

            {/* Mobile Menu Icon/Button */}
            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
