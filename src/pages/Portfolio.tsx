import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { MobileProjects } from './MobileProjects';
import { WebProjects } from './WebProjects';

// @ts-ignore
const Styles = styled.div`
    .justify-content-md-center {
        font-size: 20px;
    }

    .tabs {
        justify-content: center;
        display: flex;
        flex: auto;
        margin-left: 100px;
        margin-right: 100px;
        font-size: 20px;
    }

    .nav-tabs .nav-link{
        width: 50%;
    }

    a {
        color: #ffffff;
      }

    .a.link{
        color: #ffffff;
      }

    .tabRow {
        display: block !important;

    }
    
    

`;


export const Portfolio = () => {

    return (
    <Styles>
        <Container className="title">
            <h1>Portfolio</h1>
            <Row className="justify-content-md-center paragraph">
            <Col md={8}><p>The following is a collection of assignments I completed during my Masters of IT 
                as well as personal projects. Due to plagiarism rules I cannot provide the 
                code to my assignments but for everything else the code is available on my <a href="https://github.com/dankellyeng">GitHub</a> page.</p>
            </Col>
            </Row>
            <Row className="tabRow paragraph">
            <Tabs className="tabs" defaultActiveKey="web" id="tabs">
                <Tab className="tab" eventKey="web" title="Web">
                    <WebProjects />
                </Tab>
                <Tab className="tab" eventKey="mobile" title="Mobile">
                    <MobileProjects />
                </Tab>
            </Tabs>
            </Row>
        </Container>

    </Styles>
    );
}

