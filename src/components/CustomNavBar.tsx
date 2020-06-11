import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
// @ts-ignore
import styled from 'styled-components';
import Media from 'react-bootstrap/Media'

// @ts-ignore
const Styles = styled.div`
    .navbar {
        background-color: #272E31;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #ffffff;
        font-size: 18px;
        font-family: 'Lato', sans-serif;

        &:hover {
            color: #848fa5;
        }

        .logo.navbar-brand {
            font-size: 1.8em !important;
        }
    }

    .logo.navbar-brand {
        font-size: 2.1em !important;
        font-family: 'Megrim', cursive;
        -ms-transform: rotate(-11deg); /* IE 9 */
        transform: rotate(-11deg);
        }

    .mr-3, .mx-3 {
        margin-right: 0rem !important;
    }

`;

const CustomNavbar = () => {

    return (
    <Styles>
        <Navbar>
            <Navbar.Brand >
                </Navbar.Brand>
                <Navbar.Brand href="/" className="logo">Dan </Navbar.Brand>
                <Navbar.Brand href="/" className="logo">Kelly</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                {/* <Nav.Link href="/inspiration">Inspiration</Nav.Link> */}
                {/* <Nav.Link href="/education">Education</Nav.Link> */}
                <Nav.Link href="/demos">Demos</Nav.Link>
                <Nav.Link href="https://github.com/dankellyeng">
                <Media>
                    <img
                    height={22}
                    className="mr-3"
                    src="../images/git.svg"
                    alt="Github Logo"
                    />
                </Media>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/dankellyeng/">
                <Media>
                    <img
                    height={22}
                    width={22}
                    className="mr-3"
                    src="../images/linkedin.svg"
                    alt="LinkedIn Logo"
                    />
                </Media>
                </Nav.Link>
                <Nav.Link href="mailto:danielkelly27@gmail.com">
                <Media>
                    <img
                    height={22}
                    className="mr-3"
                    src="../images/mail.svg"
                    alt="Email Logo"
                    />
                </Media>
                </Nav.Link>
                </Nav>
        </Navbar>
    </Styles>
    );
}

export default CustomNavbar;