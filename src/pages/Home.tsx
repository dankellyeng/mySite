import React from 'react';
// @ts-ignore
import styled from 'styled-components';

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

export const Home = () => {

    return (
    <Styles>
        <div>
            <h1>HOME</h1>
        </div>
    </Styles>
    )
}

