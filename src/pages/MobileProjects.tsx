import React, { FunctionComponent, useState, useEffect } from "react";
// @ts-ignore
import styled from "styled-components";
// @ts-ignore
// import CustomCard from '../components/CustomCard';
import { Card, Button } from "react-bootstrap";
import "../App.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .container {
    position: relative;
    width: 50%;
    // max-width: 100px;
    // padding: 5px;
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
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: center;
  }

  .cardImg:hover .cardTitle {
    opacity: 1;
    z-index: 1;
  }

  .card {
    border: none;
    max-width: 200px;
  }

  .cardImg:hover .cardButton {
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
    transition: opacity 0.35s ease;
  }

  .cardButton {
    position: absolute;
    opacity: 0;
    transition: opacity 0.35s ease;
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
  key: string;
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
};

interface RootState {
  editEnabled: boolean;
}

type CardProps = {
  title: string;
  url: string;
  description: string;
  design: string;
  learnt: string;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  image: string;
};

export const CustomCard: FunctionComponent<CardProps> = ({
  title,
  description,
  design,
  learnt,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  url,
  image,
}) => (
  <Card className="container">
    <Card.Img className="cardImg" src={image}></Card.Img>
    <div className="overlay"></div>
    <Card.Title className="cardTitle">{title}</Card.Title>
    <Link
      className="cardButton"
      to={{
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
        },
      }}
    >
      View Project <IoIosArrowDroprightCircle />
    </Link>
  </Card>
);

export const MobileProjects = () => {
  const [projects, setProjects] = useState<Array<Proj>>([]);
  const API_KEY: any = process.env.REACT_APP_DB_KEY!;

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch(
      "https://9xqgtpzp56.execute-api.ap-southeast-2.amazonaws.com/default/fetchProjects",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );
    const data = await response.json();
    const webArray = data.filter(isMobile);
    setProjects(webArray);
  };

  function isMobile(element: { type: string }, index: any, array: any) {
    return element.type === "mobile";
  }

  return (
    <Styles>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* <CardDeck className="cards"> */}
        {projects.map((project) => (
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
        {/* <CustomCard url="https://lh3.googleusercontent.com/VdLUwWXcPRzSl6lRMec505Jz-QPvrIFjpmxY5eku58Ju0bsCjiLwOlMwGlpvh78UwJU=w2880-h1532-rw" title="Spotify">
             </CustomCard>
             <CustomCard url="https://lh3.googleusercontent.com/mk1_XT9yK_IBr05kCrma_Oe68Ek5SZCDJKB38jFIb1xyu8VS2LRb4k1iPNVaIG2ohNs=w2880-h1532-rw" title="example">
             </CustomCard>
             <CustomCard url="https://lh3.googleusercontent.com/ZfNgOi9Q8LSb8LuSJGNoeDzPiFq6Biy5ccCsLQKnvXjxiU8GigtBrO-Pxgcl_8sIhB8=w2880-h1532-rw" title="example" >
             </CustomCard> */}
        {/* </CardDeck>   */}
        {/* <CardDeck className="cards"> */}
        {/* <CustomCard url="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/1c/01/f7/1c01f7de-6014-c5e6-668f-49f876b65a08/pr_source.png/230x0w.png" title="example">
             </CustomCard>
             <CustomCard url="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/1f/10/b3/1f10b344-9289-42b0-47ee-d92b405255ed/pr_source.png/230x0w.png" title="example">
             </CustomCard>
             <CustomCard url="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/92/33/4e/92334e96-bf94-c136-7c2d-517aced7c894/mzl.hqryvqlo.jpg/230x0w.jpg" title="example"> */}
        {/* </CustomCard> */}
        {/* </CardDeck>        */}
      </div>
    </Styles>
  );
};
