import React, { useState, FunctionComponent } from 'react';
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
// import CustomCard from '../components/CustomCard';
import { CardDeck, Card, Button } from 'react-bootstrap';
import '../App.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const Styles = styled.div`
    // .navbar {
    //     background-color: #31393c;
    // }

    // .navbar-brand, .navbar-nav .nav-link {
    //     color: #ffffff;
    //     font-size: 1.4em;
    //     font-family: 'Inconsolate', monospace;

    //     &:hover {
    //         color: #848fa5;
    //     }
    // }

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


interface RootState {
      editEnabled: boolean;
  }

  type CardProps = {
    title: string,
    url: string
    }

  const CustomCard: FunctionComponent<CardProps> = ({title, url}) => 
    (<Card className="container">
        <Card.Img className="cardImg" src={url}></Card.Img>
        <div className="overlay"></div>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Button className="cardButton">View Project    <IoIosArrowDroprightCircle /></Button>
    </Card>
    )

export const WebProjects = () => {
   

    return (
    <Styles>
        <div>
            <CardDeck className="cards">
              <CustomCard url="https://24dlmn2bqamt1e72kah59881-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/9.png" title="Spotify">
             </CustomCard>
             <CustomCard url="https://colorlib.com/wp/wp-content/uploads/sites/2/newspaper-theme-examples.jpg" title="example">
             </CustomCard>
             <CustomCard url="https://www.dbswebsite.com/wp-content/uploads/Centura-Health-website-screenshot-for-healthcare-websites-DBS-blog.png" title="example" >
             </CustomCard>
            </CardDeck>  
            <CardDeck className="cards">
              <CustomCard url="https://static-cms.hotjar.com/images/review-site-homepage-poll-example.width-750.jpg" title="example">
             </CustomCard>
             <CustomCard url="https://www.educowebdesign.com/sites/default/files/webster_bank_drupal_banking_example_website.jpg" title="example">
             </CustomCard>
             <CustomCard url="https://res.cloudinary.com/webfactory/image/fetch/f_auto,q_auto/https://s3-eu-west-1.amazonaws.com/cdn.webfactore.co.uk/web_design_example_6176_500x300.jpg" title="example">
             </CustomCard>
            </CardDeck>       
        </div>
    </Styles>
    )
}

