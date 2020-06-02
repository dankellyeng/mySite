import React, { useState, FunctionComponent, useEffect } from 'react';
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
// import CustomCard from '../components/CustomCard';
import { CardDeck, Card, Button } from 'react-bootstrap';
import '../App.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Styles = styled.div`

    .customCards {
        width: 100px;
        min-height: 450px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .cards {
        color: black;
        max-width: 100px
        min-height: 450px;
        padding-top:15px;
        padding-bottom:15px;
    }

    .cardImg:hover .cardTitle{
        opacity: 1;
        z-index: 1;
    }

    .card {
        border: none;
    }

    .cardImg:hover .cardButton{
        opacity: 1;   
    }

    .cardTitle:hover {
        display: inline-block;
    }

    .container {
        position: relative;
        width: 50%;
        padding: 0;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-15deg, #ff000000, #ff000000);
        -webkit-transition: background 0.5s ease;
        transition: background 0.5s ease;
    }

    .container:hover .overlay {
        display: block;
        background: #313950;
        opacity: 90%;
    }


   .cardImg {
       left: 0;
       min-width: 100%;
       height: 100%;
   }

   .cardTitle {
        position: absolute;
        opacity: 0;
        transition: opacity .35s ease;
    }

    .cardButton {
        position: absolute;
        opacity: 0;
        transition: opacity .35s ease;
    }


    .cardButton a {
        z-index: 1;
    } 

    .container:hover .cardButton {
        opacity: 1;
    }

    .container:hover .cardTitle {
        opacity: 1;
    }

    .container .cardButton {
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #848fa5;
        color: white;
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
      }

      .container .cardTitle {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        color: white;
        font-size: 20px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
      }

      
`;

type Proj = {
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

interface RootState {
      editEnabled: boolean;
  }

  type CardProps = {
    title: string,
    url: string,
    description: string,
    design: string,
    learnt: string,
    skill1: string,
    skill2: string,
    skill3: string,
    skill4: string,
    skill5: string,
    image: string,
    }

  export const CustomCard: FunctionComponent<CardProps> = ({title, description, design, learnt, skill1, skill2, skill3, skill4, skill5, url, image}) => 
    (<Card className="container">
        <Card.Img className="cardImg" src={image}></Card.Img>
        <div className="overlay"></div>
        <Card.Title className="cardTitle">{title}</Card.Title>
        {/* <Button className="cardButton" href='/'>View Project    <IoIosArrowDroprightCircle /></Button> */}
        <Link 
        className="cardButton" 
        to={
            {
            pathname: "/project",
            state: {
                title: title, 
                description: description, 
                design: design, 
                learnt: learnt, 
                skill1: skill1, 
                skill2: skill2, 
                skill3: skill3, 
                skill4: skill4, 
                skill5: skill5, 
                url: url,
            }
            }
        }
        >View Project <IoIosArrowDroprightCircle /></Link>
    </Card>
    )

export const WebProjects = () => {
    const [projects, setProjects] = useState<Array<Proj>>([]);
    const API_KEY: any = process.env.REACT_APP_DB_KEY!;

    

    useEffect (() => {
        getProjects()
      }, []);
    
      const getProjects = async () => {

        const response = await fetch('https://9xqgtpzp56.execute-api.ap-southeast-2.amazonaws.com/default/fetchProjects', {
            method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
        });
        const data = await response.json();
        const webArray= data.filter(isWeb);
        setProjects(webArray);
      };

      function isWeb(element: { type: string; }, index: any, array: any){
          return (element.type === "web")
      }

      //filter array for web type
    //   const webArray= projects.filter(isWeb);
      
    //   var i;
    //   for(i = 0; i<projects.length; i++){
    //       if(projects[i].type === "web"){
    //         webArray.push(projects[i]); 
    //       }
    //   }
    //   setProjects(webArray);

    return (
    <Styles>
        <div>
            <CardDeck className="cards">
            {
            projects.map(project => (
                    <CustomCard 
                    key={project!.title}
                    title={project!.title} 
                    url={project!.url}
                    image={project!.image}
                    description={project!.description}
                    design={project!.design}
                    learnt={project!.learnt}
                    skill1={project!.skill1}
                    skill2={project!.skill2}
                    skill3={project!.skill3}
                    skill4={project!.skill4}
                    skill5={project!.skill5}
                     />
                    ))}
              {/* <CustomCard url="https://personal-porfolio-dan-kelly.s3-ap-southeast-2.amazonaws.com/Screen+Shot+2020-05-29+at+10.01.44+am.png" title="Home Finder">
             </CustomCard>
             <CustomCard url="https://colorlib.com/wp/wp-content/uploads/sites/2/newspaper-theme-examples.jpg" title="example">
             </CustomCard>
             <CustomCard url="https://www.dbswebsite.com/wp-content/uploads/Centura-Health-website-screenshot-for-healthcare-websites-DBS-blog.png" title="example" >
             </CustomCard> */}
            </CardDeck>  
            <CardDeck className="cards">
              {/* <CustomCard url="https://static-cms.hotjar.com/images/review-site-homepage-poll-example.width-750.jpg" title="example">
             </CustomCard>
             <CustomCard url="https://www.educowebdesign.com/sites/default/files/webster_bank_drupal_banking_example_website.jpg" title="example">
             </CustomCard>
             <CustomCard url="https://res.cloudinary.com/webfactory/image/fetch/f_auto,q_auto/https://s3-eu-west-1.amazonaws.com/cdn.webfactore.co.uk/web_design_example_6176_500x300.jpg" title="example"> */}
             {/* </CustomCard> */}
            </CardDeck>       
        </div>
    </Styles>
    )
}

