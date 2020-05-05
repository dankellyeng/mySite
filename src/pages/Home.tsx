import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Media } from 'react-bootstrap';

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

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
      }

    .image {
        justify-content: center;
    }  
`;

export const Home = () => {

    return (
    <Styles>
        <div>
            <h1 className="title">Welcome</h1>
            {/* <Media>
                <img className="image"
                width={800}
                src='/images/itMe.png' 
                alt='image of me on couch'
                />
            </Media> */}
            <img style={{animation: 'spin 13s linear infinite' }} src='/images/itMe.png' alt='image of me on couch'/>
        </div>
    </Styles>
    )
}

