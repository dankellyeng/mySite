import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import "../App.css";
import { Container } from 'react-bootstrap';

// @ts-ignore
const Styles = styled.div`
    .navbar {
        background-color: #31393c;
    }

    // .justify-content-end {
    //     margin-right: 2px;
    // }

    // .dropdown-toggle::after {
    //     display: none;
    // }

    

    .navbar-brand, .navbar-nav .nav-link {
        color: #ffffff;
        font-size: 1.4em;
        font-family: 'Inconsolate', monospace;

        &:hover {
            color: #848fa5;
        }
    }

    .mr-auto {
        
    }
`;

export const About = () => {

    return (
    <Styles>
        <Container >
            <h1 className="title">About</h1>
            <p className="title">
            I really enjoy making web apps using React as well as iPhone apps in Swift and Android apps in Java.
                Front-end development is my speciality but I am also condifent with the back-end.  
            </p>

            <h1>Skills</h1>
        </Container>
    </Styles>
    )
}

