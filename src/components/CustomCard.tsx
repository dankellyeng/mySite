import React from 'react';
import { Card } from 'react-bootstrap';

type CardProps = {
title: string,
description: string,
url: string
}



const CustomCard = ({title, description, url}: CardProps) => 
    (
        
        <Card>
            <Card.Img src={url}></Card.Img>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
    </Card>
    )
export default CustomCard;