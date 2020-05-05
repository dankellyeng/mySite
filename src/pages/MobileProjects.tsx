import React, { useState, FunctionComponent } from 'react';
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
// import CustomCard from '../components/CustomCard';
import { CardDeck, Card, Button } from 'react-bootstrap';
import '../App.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const Styles = styled.div`
   
    .container {
        position: relative;
        width: 50%;
        // max-width: 100px;
        padding: 0;
    }
    
    .customCards {
        // max-width: 100px;
        // max-height: 50px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .cards {
        color: black;
        // max-width: 100px
        // max-height: 200px;
        padding-top:15px;
        padding-bottom:15px;
        justify-content: center;
    }

    .cardImg:hover .cardTitle{
        opacity: 1;
        z-index: 1;
    }

    .card {
        border: none;
        max-width: 200px;
    }

    .cardImg:hover .cardButton{
        opacity: 1;   
    }

    .cardTitle:hover {
        display: inline-block;
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
       min-height: 100%;
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

export const MobileProjects = () => {
   

    return (
    <Styles>
        <div>
            <CardDeck className="cards">
              <CustomCard url="https://lh3.googleusercontent.com/VdLUwWXcPRzSl6lRMec505Jz-QPvrIFjpmxY5eku58Ju0bsCjiLwOlMwGlpvh78UwJU=w2880-h1532-rw" title="Spotify">
             </CustomCard>
             <CustomCard url="https://lh3.googleusercontent.com/mk1_XT9yK_IBr05kCrma_Oe68Ek5SZCDJKB38jFIb1xyu8VS2LRb4k1iPNVaIG2ohNs=w2880-h1532-rw" title="example">
             </CustomCard>
             <CustomCard url="https://lh3.googleusercontent.com/ZfNgOi9Q8LSb8LuSJGNoeDzPiFq6Biy5ccCsLQKnvXjxiU8GigtBrO-Pxgcl_8sIhB8=w2880-h1532-rw" title="example" >
             </CustomCard>
            </CardDeck>  
            <CardDeck className="cards">
              <CustomCard url="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/1c/01/f7/1c01f7de-6014-c5e6-668f-49f876b65a08/pr_source.png/230x0w.png" title="example">
             </CustomCard>
             <CustomCard url="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/1f/10/b3/1f10b344-9289-42b0-47ee-d92b405255ed/pr_source.png/230x0w.png" title="example">
             </CustomCard>
             <CustomCard url="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/92/33/4e/92334e96-bf94-c136-7c2d-517aced7c894/mzl.hqryvqlo.jpg/230x0w.jpg" title="example">
             </CustomCard>
            </CardDeck>       
        </div>
    </Styles>
    )
}

