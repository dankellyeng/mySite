import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
// @ts-ignore
import styled from "styled-components";
// @ts-ignore
import axios from "axios";
import "../App.css";
import { Form, Button } from "react-bootstrap";

const Styles = styled.div``;

type Person = {
  name: string;
  id: number;
};

export const PeopleInput = () => {
  // const [people, setPeople] = useState<Array<Person>>([]);
  const [person, setPerson] = useState<Person>({
    name: "",
    id: 0,
  });

  var dt = new Date();

  const options = {
    headers: { "API-Key": "api-9ac0e3c9-abf9-43a8-adc6-37550290375d" },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ name: e.target.value, id: dt.getTime() });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios
      .post(`https://dark-star-7714.getsandbox.com/users`, { person }, options)
      .then((res) => {});

    setPerson(person);
  };

  useEffect(() => {
    // getPeople()
  }, []);

  //   const getPeople = async () => {
  //     axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //         setPeople(res.data);
  //     });
  //   };

  return (
    <Styles>
      <div>
        <Form>
          <Form.Label>
            Person Name:
            <Form.Control
              placeholder="Sign our guestbook"
              type="text"
              name="name"
              onChange={handleChange}
            ></Form.Control>
          </Form.Label>
          {/* <Button className="globalButtonSml" type="submit" onClick={handleSubmit}>Add</Button> */}
        </Form>
      </div>
    </Styles>
  );
};
