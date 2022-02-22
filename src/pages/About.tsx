import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import "../App.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Education } from "./Education";
import { Skills } from "../components/Skills";
import { Profiles } from "../components/Profiles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const About = () => {
  const [active, setActive] = useState("education");

  function toggleActive(item: String) {
    console.log({ item });
    if (item === "education") {
      setActive("education");
    } else if (item === "skills") {
      setActive("skills");
    } else if (item === "profile") {
      setActive("profile");
    }
  }

  return (
    <div className="paragraph" style={styles.paragraph}>
      <h1 className="title">About</h1>
      <p className="paragraph" style={styles.paragraph}>
        I really enjoy making web apps using React as well as iPhone apps in
        Swift and Android apps in Java.
      </p>
      <p>
        Front-end development is my speciality but I am also confident with the
        back-end.
      </p>

      <Accordion flush style={styles.customAccordian} defaultActiveKey="0">
        <Accordion.Item
          style={styles.accordianItem}
          eventKey="0"
          onClick={() => {
            toggleActive("education");
          }}
        >
          <Accordion.Header>
            {active === "education" ? (
              <div style={styles.activeHeader}>
                <h1>
                  Education <IoIosArrowUp />
                </h1>
              </div>
            ) : (
              <div style={styles.inactiveHeader}>
                <h1>
                  Education <IoIosArrowDown />
                </h1>
              </div>
            )}
          </Accordion.Header>
          <Accordion.Body style={styles.accordianBody}>
            <Education />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          style={styles.accordianItem}
          eventKey="1"
          onClick={() => {
            toggleActive("skills");
          }}
        >
          <Accordion.Header>
            {active === "skills" ? (
              <div style={styles.activeHeader}>
                <h1>
                  Skills <IoIosArrowUp />
                </h1>
              </div>
            ) : (
              <div style={styles.inactiveHeader}>
                <h1>
                  Skills <IoIosArrowDown />
                </h1>
              </div>
            )}
          </Accordion.Header>

          <Accordion.Body>
            <div style={styles.accordianBody}>
              <Skills />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          style={styles.accordianItem}
          eventKey="2"
          onClick={() => {
            toggleActive("profile");
          }}
        >
          <Accordion.Header>
            {active === "profile" ? (
              <div style={styles.activeHeader}>
                <h1>
                  Profiles <IoIosArrowUp />
                </h1>
              </div>
            ) : (
              <div style={styles.inactiveHeader}>
                <h1>
                  Profiles <IoIosArrowDown />
                </h1>
              </div>
            )}
          </Accordion.Header>

          <Accordion.Body style={styles.accordianBody}>
            <Profiles />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const styles: any = {
  customAccordian: {
    backgroundColor: "transparent",
    width: "100%",
    padding: 0,
  },

  accordianItem: {
    backgroundColor: "transparent",
  },

  activeHeader: {
    boxShadow: "inset 0 -14rem 0 0 #3fa2dd",
    width: "100%",
  },

  accordianBody: {
    display: "flex",
    justifyContent: "center",
  },

  paragraph: {
    marginLeft: "60px",
    marginRight: "60px",
  },

  inactiveHeader: {
    boxShadow: "inset 0 -0.2rem 0 0 #3fa2dd",
    transition: "boxShadow 0.4s",
    width: "100%",
    color: "white",
  },
};
