import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// @ts-ignore
import styled from "styled-components";

// @ts-ignore
const Styles = styled.div`
  .navbar {
    background-color: #272e31;
  }

  .navbar-toggler-icon {
    color: #ffffff;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;
    font-size: 18px;
    font-family: "Lato", sans-serif;

    &:hover {
      color: #848fa5;
    }

    .logo.navbar-brand {
      font-size: 1.8em !important;
    }
  }

  .logo.navbar-brand {
    font-size: 2.1em !important;
    font-family: "Megrim", cursive;
    -ms-transform: rotate(-11deg); /* IE 9 */
    transform: rotate(-11deg);
  }

  .mr-3,
  .mx-3 {
    margin-right: 0rem !important;
  }
`;

const CustomNavbar = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <div>
            <Navbar.Brand className="logo">Dan</Navbar.Brand>
            <Navbar.Brand className="logo">Kelly</Navbar.Brand>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          // className=".navbar-toggler-icon"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/demos">Demos</Nav.Link>
            {/* <Nav.Link href="/routine">Routine</Nav.Link> */}

            <Nav.Link href="https://github.com/dankellyeng">
              <img
                height={22}
                className="mr-3"
                src="../images/git.svg"
                alt="Github Logo"
              />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/dankellyeng/">
              <img
                height={22}
                width={22}
                className="mr-3"
                src="../images/linkedin.svg"
                alt="LinkedIn Logo"
              />
            </Nav.Link>
            <Nav.Link href="mailto:danielkelly27@gmail.com">
              <img
                height={22}
                className="mr-3"
                src="../images/mail.svg"
                alt="Email Logo"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default CustomNavbar;
