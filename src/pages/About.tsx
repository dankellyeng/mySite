import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import "../App.css";
import { Container, Row, Col, Media, Table, ProgressBar } from 'react-bootstrap';
import { GitHub } from '../components/GitHub';
import { LinkedIn } from '../components/LinkedIn';

// @ts-ignore
const Styles = styled.div`
    
.logos{
    border-radius: 5px;
}

.row{
    justify-content: center;
}

.col{
    display: contents;
}

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

`;

export const About = () => {

    return (
    <Styles>
        <Container className="paragraph">
            <h1 className="title">About</h1>
            <p className="paragraph">
            I really enjoy making web apps using React as well as iPhone apps in Swift and Android apps in Java.
            </p>
            <p>Front-end development is my speciality but I am also confident with the back-end.  
            </p>


            <h1 className="title">Skills</h1>
            <Table className="table paragraph" hover
            bordered={false}>
                <tbody>
                    <tr>
                    <td>React
                    <ProgressBar now={70} />
                    </td>
                    <td>Git 
                    <ProgressBar now={70} />
                    </td>
                    </tr>
                    <tr>
                    <td>HTML & CSS
                    <ProgressBar now={70} />
                    </td>
                    <td>REST APIs
                    <ProgressBar now={60} />
                    </td>
                    </tr>
                    <tr>
                    <td>JavaScript
                    <ProgressBar now={60} />
                    </td>
                    <td>iOS apps
                    <ProgressBar now={60} />
                    </td>
                    </tr>
                    <tr>
                    <td>Java
                    <ProgressBar now={60} />
                    </td>
                    <td>Android apps
                    <ProgressBar now={50} />
                    </td>
                    </tr>
                    <tr>
                    <td>Typescript
                    <ProgressBar now={60} />
                    </td>
                    <td>Swift
                    <ProgressBar now={50} />
                    </td>
                    </tr>
                    <tr>
                    <td>C#
                    <ProgressBar now={60} />
                    </td>
                    <td>Angular
                    <ProgressBar  now={40} />
                    </td>
                    
                    </tr>
                </tbody>
            </Table>

            <h1 className="title">Profiles</h1>

            <Row className="profiles">
                <Col>
                <GitHub />
                </Col>
                <Col>
                <LinkedIn />
                </Col>
            </Row>
        </Container>
    </Styles>
    )
}

