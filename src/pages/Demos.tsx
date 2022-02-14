import React, { useState } from "react";
// @ts-ignore
import styled from "styled-components";
import { TodoList } from "../components/TodoList";
import { AddTodoForm } from "../components/AddTodoForm";
// @ts-ignore

import { Card, Container } from "react-bootstrap";
import { LoginDemo } from "../components/LoginDemo";
import "../App.css";
import { People } from "../components/People";
import { PeopleInput } from "../components/PeopleInput";

const Styles = styled.div`
  .customCards {
    max-width: 350px;
    min-height: 300px;
    align-items: center;
    display: flex;
    justify-content: center;
    background: transparent;
  }

  .card {
    border: 3px solid white;
    border-radius: 3%;
  }

  .centrePage {
    display: flex;
    justify-content: center;
  }
`;

interface RootState {
  editEnabled: boolean;
}

const initialTodos: Array<Todo> = [
  { text: "Walk the cat", complete: true },
  { text: "Write app", complete: false },
];

export const Demos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <Styles>
      <div>
        <h1 className="title">Demos</h1>
        <p className="paragraph">
          Below are some fun little demos that showcase some of the techniques
          and tools I have used with React.
        </p>
        <Container className="centrePage">
          {/* <CardDeck> */}
          <Card className="customCards">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoForm addTodo={addTodo} />
          </Card>
          <Card className="customCards">
            <div className="paragraph">
              <LoginDemo />
            </div>
          </Card>
          <Card className="customCards">
            <div className="paragraph">
              <PeopleInput />
              <People />
            </div>
          </Card>
          {/* </CardDeck>   */}
        </Container>
      </div>
    </Styles>
  );
};
