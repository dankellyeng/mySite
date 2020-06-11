import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import "../App.css";
import {  Accordion, Card } from 'react-bootstrap';
import { Education } from './Education';
import { Skills } from '../components/Skills';
import { Profiles } from '../components/Profiles';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { educationActive, skillsActive, profileActive, educationInactive, profileInactive, skillsInactive } from '../actions';

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

.profiles{
    padding-top: 50px;
    padding-bottom: 15px;
}

.customAccordian{
    background-color: transparent;
    width: 100%;
    padding: 0;

}

.aboutCard {
    background-color: transparent;
}

.card-header {
    border: none;
    background-color: transparent;
    font-family: 'Alegreya', serif;
    font-size: 40px;
    text-align: left;
    // border-bottom: none;
    margin-bottom: 2px !important;

}

.activeHeader{
    box-shadow: inset 0 -1.4rem 0 0 #3fa2dd;
}

.skillsCard{
    display: flex;
    justify-content: center;
}

.paragraph{
    margin-left: 60px;
    margin-right: 60px;
}

.card{
    border: none;
}

.inactiveHeader {
    box-shadow: inset 0 -0.2rem 0 0 #3fa2dd;
    transition: box-shadow 0.4s;

    &.start-offset {
        box-shadow: inset 0 -1.4rem 0 0 #3fa2dd;

    &:hover {
        box-shadow: inset 0 -0.2rem 0 0 #3fa2dd;
    }
}

    &:hover {
        box-shadow: inset 0 -1.4rem 0 0 #3fa2dd;
    }
}



`;

interface RootState {
    eduIsActive: boolean;
    skillsIsActive: boolean;
    profIsActive: boolean;
}

export const About = () => {

    const selecteduIsActive = (state: RootState) => state.eduIsActive;
    const selectskillsIsActive = (state: RootState) => state.skillsIsActive;
    const selectprofIsActive = (state: RootState) => state.profIsActive;
    const eduIsActive = useSelector(selecteduIsActive);
    const skillsIsActive = useSelector(selectskillsIsActive);
    const profIsActive = useSelector(selectprofIsActive);
    const dispatch = useDispatch();

    function active(){
        
        console.log(eduIsActive)
        if(eduIsActive === false && skillsIsActive === false && profIsActive === false) {
            dispatch(educationActive());
            // dispatch(skillsActive());
            // dispatch(profileActive());
            console.log("turning education off");
        } else {
            dispatch(educationInactive());
            dispatch(skillsInactive());
            dispatch(profileInactive());
            console.log("turning on");

        }
    }

    function activeSkills(){
        console.log(eduIsActive)
        if(eduIsActive === true && skillsIsActive === true && profIsActive === false) {
            dispatch(skillsInactive());
            console.log("turning off");
        } else {
            dispatch(skillsActive());
            dispatch(educationActive());
            dispatch(profileInactive());
            console.log("turning on");

        }
    }

    function activeProf(){
        console.log(eduIsActive)
        if(eduIsActive === true && skillsIsActive === false && profIsActive === true) {
            dispatch(profileInactive());
            console.log("turning off");
        } else {
            dispatch(profileActive());
            dispatch(skillsInactive());
            dispatch(educationActive());
            console.log("turning on");

        }
    }

    return (
    <Styles>
        <div className="paragraph">
            <h1 className="title">About</h1>
            <p className="paragraph">
            I really enjoy making web apps using React as well as iPhone apps in Swift and Android apps in Java.
            </p>
            <p>Front-end development is my speciality but I am also confident with the back-end.  
            </p>

            <Accordion className="customAccordian" defaultActiveKey="0">
            <Card className="aboutCard">
                <Accordion.Toggle as={Card.Header} 
                onClick={() => {
                    active();
                    
                    // dispatch(educationActive());
                    // dispatch(skillsInactive());
                    // dispatch(profileInactive());
                    console.log(eduIsActive)
                }}
                    eventKey="0">
                { !eduIsActive?
                <div className="activeHeader">
                    <h1>Education <IoIosArrowUp /></h1>
                </div>
                :
                <div>
                    <h1 className="inactiveHeader">Education <IoIosArrowDown /></h1>
                </div>
                }       
                </Accordion.Toggle>
                <Accordion.Collapse className="accordBody" eventKey="0">
              
                <Education />
                {/* <Card.Body>Hello! I'm the body</Card.Body> */}
                </Accordion.Collapse>
            </Card>
            <Card className="aboutCard">
            <Accordion.Toggle as={Card.Header} 
            onClick={() => {
                activeSkills()
                // dispatch(educationActive());
                // dispatch(skillsActive());

                // dispatch(profileInactive());
            }}
            eventKey="1">
                { skillsIsActive?
                <div className="activeHeader">
                    <h1>Skills <IoIosArrowUp /></h1>
                </div>
                :
                <div>
                    <h1 className="inactiveHeader">Skills <IoIosArrowDown /></h1>
                </div>
                }
                </Accordion.Toggle>
                <Accordion.Collapse className="accordBody" eventKey="1">
                <div className="skillsCard">
                <Skills />
                </div>
                </Accordion.Collapse>
            </Card>
            <Card className="aboutCard">
            <Accordion.Toggle as={Card.Header} 
            onClick={() => {
                activeProf()
                // dispatch(educationInactive());
                // dispatch(skillsInactive());
                // dispatch(profileActive());
            }}
            eventKey="2">
                { profIsActive?
                <div className="activeHeader">
                    <h1>Profiles <IoIosArrowUp /></h1>
                </div>
                :
                <div>
                    <h1 className="inactiveHeader">Profiles <IoIosArrowDown /></h1>
                </div>
                }
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Profiles />
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </div>
    </Styles>
    )
}

