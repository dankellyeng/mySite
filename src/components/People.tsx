import axios from 'axios';
import React, { useState, useEffect } from 'react';
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
import '../App.css';
// import { Button } from 'react-bootstrap';

const Styles = styled.div`

`;

type Person = {
    person: {
        id: string;
        name: string;
    }
}



export const People = () => {
    const [people, setPeople] = useState<Array<Person>>([]);
    const options = {
        headers: {'API-Key': 'api-9ac0e3c9-abf9-43a8-adc6-37550290375d'}
    };

    useEffect (() => {
        getPeople()
        console.log("people: "+ people);
      }, []);

    
      const getPeople = async () => {
        axios.get(`https://dark-star-7714.getsandbox.com/users`, options)
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            setPeople(res.data);
            
            console.log(res.data)
        });
      };

    //   const deletePerson = async () => {
    //       axios.delete(`https://holy-lake-1657.getsandbox.com/delete/person`, options)
    //   }



    return (
    <Styles>
        <div>
        <ul>
            {people.map(person => (
           <li >{person.person.name}</li>
           
            ))
            }
            {/* <Button onClick={deletePerson}>Delete</Button> */}
        </ul>  
        </div>
    </Styles>
    )
}


