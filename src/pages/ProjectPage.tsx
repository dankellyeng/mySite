import React, { FunctionComponent } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Container, Col, Row, Button, ListGroup } from 'react-bootstrap';
import '../App.css';
import { useLocation, useHistory } from 'react-router';

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

    .subTitle{
        padding-top: 10px
    }

    h1 {
        font-size: 2.8em;
    }

    p {
        width: 90%;
        display: inline-block;
        justify-content: center;
        font-size: 1.2em;
    }

    
`;

type ProjectProps = {
    title: string;
    url: string;
    image: string;
    description: string;
    design: string;
    learnt: string;
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
    skill5: string;
    type: string;
    }


// export const ProjectPage: FunctionComponent<ProjectProps> = ({title, description, design, learnt, skill1, skill2, skill3, skill4, skill5, url}) => (
export const ProjectPage = () => {
    const location = useLocation();
    const history = useHistory();
    const object:any = location.state;

    function goBackHandle(){
        history.goBack();
    }

    //get data from API

    console.log(location.state);
    return(
    <Styles>
        <>
            <h1 className="title">
                {object.title}
                </h1>

            <Container className="paragraph">
                <Row>
                    <Col sm={8}>
            <h1 className="title subTitle">Project Brief</h1>
            <p>{object.description}</p>
            <h1 className="title subTitle">Design</h1>
            <p>{object.design}</p>
            <h1 className="title subTitle">What I learned</h1>
            <p>{object.learnt}</p>
            </Col>
            <Col sm={4}>
            <Button className="globalButton" href={object.url}>Visit Website</Button>
            <h1 className="title subTitle">Skills used</h1>
            <ListGroup >
                <ListGroup.Item className="skillItem">{object.skill1}</ListGroup.Item>
                <ListGroup.Item className="skillItem">{object.skill2}</ListGroup.Item>
                <ListGroup.Item className="skillItem">{object.skill3}</ListGroup.Item>
                <ListGroup.Item className="skillItem">{object.skill4}</ListGroup.Item>
                <ListGroup.Item className="skillItem">{object.skill5}</ListGroup.Item>
            </ListGroup>

            <Button className="globalButton" onClick={goBackHandle}>Go back</Button>
            </Col>
            
            </Row>
            </Container>
            </>
    </Styles>
    )
    }

