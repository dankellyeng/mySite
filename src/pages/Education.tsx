import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import "../App.css";
import { Container, Media, Row, Col } from 'react-bootstrap';

// @ts-ignore
const Styles = styled.div`
    
.logos{
    border-radius: 5px;
}

.row{
    justify-content: center;
}

// .col{
//     display: contents;
// }

.table td {
border: none !important;
outline: none !important;
padding-top: 2px;
}

.progress-bar{
    background-color: #3fa2dd;
}

.profiles{
    padding-top: 50px;
    padding-bottom: 15px;
}

.uni{
    color: #ffffff;
    font-family: 'Alegreya', serif;
    text-align: center;
}

.paragraph{
    // width: 67%;
    justify-content: center;
}

.row{
    padding-top: 20px;
    padding-bottom: 20px;
}

.textOver{
    position: absolute;
    width: 100%;
    top: 17%;
}

.underImage{
    width: auto;
    
}

.media {
display: block;
opacity: 0.3;
}

`;

export const Education = () => {

    return (
    <Styles>
        <Container className="paragraph">
            <h1 className="title">Education</h1>
            <Row>
                <Col>
                    <div className="underImage">
            <Media>
                <a href="https://www.rmit.edu.au/study-with-us/levels-of-study/postgraduate-study/masters-by-coursework/master-of-information-technology-mc208/mc208auscy">
                    <img 
                    className="logos"
                    width={250}
                    src='https://personal-porfolio-dan-kelly.s3-ap-southeast-2.amazonaws.com/rmit+red.png' 
                    alt='RMIT University logo'
                    />
                    </a>
            </Media>
            <div className="textOver">
            <h2 className="uni">Master of Information Technology</h2>
            <p>RMIT University</p>

            <p>Graduated: 2020 (pending)</p>
            <p>Focus: Mobile Computing & Web Systems and Search Technology</p>
            </div>
            </div>
            </Col>
           
            </Row>
            <Row>
            <Col>
            <div className="underImage">
            <Media>
                <a href="https://www3.monash.edu/pubs/2013handbooks/courses/3910.html">
                    <img 
                    className="logos"
                    width={250}
                    src='https://personal-porfolio-dan-kelly.s3-ap-southeast-2.amazonaws.com/monash+blue.png' 
                    alt='Monash University logo'
                    />
                    </a>
            </Media>
            <div className="textOver">
            <h2 className="uni">Bachelor of Arts (Global)</h2>
            <p>Monash University</p>
            <p>Graduated: 2016</p>
            <p>Focus: International Studies</p>
            </div>
            </div>
            </Col>
            </Row>
            <h1 className="title">Honourable mentions</h1>
            <Row>
            <Col>
            <div className="underImage">
            <Media>
                <a href="https://www.youtube.com/watch?v=kkwiQmGWK4c">
                    <img 
                    className="logos"
                    width={250}
                    src='https://personal-porfolio-dan-kelly.s3-ap-southeast-2.amazonaws.com/youtube.png' 
                    alt='Monash University logo'
                    />
                    </a>
            </Media>
            <div className="textOver">
            <h2 className="uni">So many tutorials</h2>
            <p>YouTube</p>
            <p>Graduated: never</p>
            <p>Focus: Tutorials and cat videos</p>
            </div>
            </div>
            </Col>
            <Col>
            <div className="underImage">
            <Media>
                <a href="https://stackoverflow.com/questions/245062/whats-the-difference-between-javascript-and-java">
                    <img 
                    className="logos"
                    width={200}
                    src='https://personal-porfolio-dan-kelly.s3-ap-southeast-2.amazonaws.com/stack.png' 
                    alt='Monash University logo'
                    />
                    </a>
            </Media>
            <div className="textOver">
            <h2 className="uni">Please help me</h2>
            <p>Stack Overflow</p>
            <p>Graduated: never</p>
            <p>Focus: Literally everything</p>
            </div>
            </div>
            </Col>
            </Row>
            </Container>

    </Styles>
    )
}

