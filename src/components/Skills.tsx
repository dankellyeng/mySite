import React from "react";
// @ts-ignore
import styled from "styled-components";
import "../App.css";
import { Row, Col, Table, ProgressBar } from "react-bootstrap";

// @ts-ignore
const Styles = styled.div`
  .logos {
    border-radius: 5px;
  }

  .row {
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

  .progress-bar {
    background-color: #0beba0;
  }

  .profiles {
    padding-top: 50px;
    padding-bottom: 15px;
  }

  .uni {
    color: #ffffff;
    font-family: "Alegreya", serif;
    text-align: center;
  }

  .skillParagraph {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    text-align: center;
    padding-top: 10px;
    min-width: 350px;
  }

  .row {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Skills = () => {
  return (
    <Styles>
      <div className="skillParagraph">
        {/* <h1 className="title">Skills</h1> */}
        <Row>
          <Col sm={6}>
            <Table className="table skillParagraph" hover bordered={false}>
              <tbody>
                <tr>
                  <td>
                    React
                    <ProgressBar now={95} />
                  </td>
                </tr>
                <tr>
                  <td>
                    React Native
                    <ProgressBar now={95} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Git
                    <ProgressBar now={95} />
                  </td>
                </tr>
                <tr>
                  <td>
                    HTML & CSS
                    <ProgressBar now={95} />
                  </td>
                </tr>
                <tr>
                  <td>
                    REST APIs
                    <ProgressBar now={95} />
                  </td>
                </tr>
                <tr>
                  <td>
                    JavaScript
                    <ProgressBar now={90} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col sm={6}>
            <Table className="table skillParagraph" hover bordered={false}>
              <tbody>
                <tr>
                  <td>
                    Typescript
                    <ProgressBar now={80} />
                  </td>
                </tr>
                <tr>
                  <td>
                    MySQL
                    <ProgressBar now={60} />
                  </td>
                </tr>
                <tr>
                  <td>
                    C#
                    <ProgressBar now={60} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Angular
                    <ProgressBar now={50} />
                  </td>
                </tr>
                <tr>
                  <td>
                    GraphQl
                    <ProgressBar now={50} />
                  </td>
                </tr>
                <tr>
                  <td>
                    SASS
                    <ProgressBar now={50} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Styles>
  );
};
