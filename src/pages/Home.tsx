import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Media, Container } from 'react-bootstrap';
import '../App.css';

// @ts-ignore
const Styles = styled.div`

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
      }

    .image {
        justify-content: center;
        z-index: 1;
        left: 0;
    }  

      .frame {
        position: absolute;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 500px;
        margin: auto;
        background-color: #21d4fd;
        background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
        border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
        box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
        animation: morphing 10s infinite;
        overflow: hidden;
      }
      .frame:hover {
        animation-play-state: paused;
      }

      @keyframes morphing {
        0% {
          border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
          box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
        }
        25% {
          border-radius: 58% 63% 75% 25%/76% 46% 54% 24%;
        }
        50% {
          border-radius: 42% 58% 25% 75%/55% 27% 73% 45%;
          box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
        }
        75% {
          border-radius: 70% 20% 30% 70%/70% 70% 30% 30%;
        }
      }
      
      
      .centre{
          justify-content: center;
          display: flex;
      }

      .middle{
        justify-content: center;
        display: flex;
    }

    .title {
        padding-top: 40px;
    }

    h1 {
        font-size: 2.8em;
    }

    p {
        width: 50%;
        display: inline-block;
        justify-content: center;
        padding-bottom: 30px;
        font-size: 1.2em;
    }

    
`;

export const Home = () => {

    return (
    <Styles>
            <h1 className="title">Hi, I'm Dan</h1>
            <Container className="paragraph">
            <p >I am an aspiring app developer and designer.
            </p>

                <div  className="centre">
                    <div className="frame">            
                </div>
                <Media className="image">
                <a href='/about'>
                    <img 
                    width={650}
                    src='/images/itMe.png' 
                    alt='me on couch'
                    />
                </a>
                 </Media>
                </div>
            </Container>
    </Styles>
    )
}

