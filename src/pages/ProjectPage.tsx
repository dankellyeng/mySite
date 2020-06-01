import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Container, Col, Row, Button, ListGroup } from 'react-bootstrap';
import '../App.css';

// @ts-ignore
const Styles = styled.div`


      .skillItem{
          background-color: transparent;
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

export const ProjectPage = () => {


    //get data from API

    

    return (
    <Styles>
            <h1 className="title">Project Title</h1>

            <Container className="paragraph">
                <Row>
                    <Col>
            <h1 className="title">Project Brief</h1>
            <p>Paragraph about the project</p>
            <h1 className="title">Design</h1>
            <p>Paragraph about the project</p>
            <h1 className="title">What I learned</h1>
            <p>Paragraph about the project</p>
            </Col>
            <Col>
            <Button className="globalButton">Visit Website</Button>
            <h1 className="title">Skills used</h1>
            <ListGroup >
                <ListGroup.Item className="skillItem">HTML and CSS</ListGroup.Item>
                <ListGroup.Item className="skillItem">React</ListGroup.Item>
                <ListGroup.Item className="skillItem">DynamoDB</ListGroup.Item>
                <ListGroup.Item className="skillItem">Third party REST APIs</ListGroup.Item>
                <ListGroup.Item className="skillItem">React Redux</ListGroup.Item>
            </ListGroup>

            </Col>
            
            </Row>
            </Container>
    </Styles>
    )
}

