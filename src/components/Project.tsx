import React, { useState } from 'react';
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
import { CardDeck, Card } from 'react-bootstrap';
import  { LoginDemo } from './LoginDemo';
import '../App.css';
// @ts-ignore
import { TodoList } from './TodoList';
// @ts-ignore
import { AddTodoForm } from './AddTodoForm';


const Styles = styled.div`
    .navbar {
        background-color: #31393c;
    }

    // .justify-content-end {
    //     margin-right: 2px;
    // }

    // .dropdown-toggle::after {
    //     display: none;
    // }

    

    .navbar-brand, .navbar-nav .nav-link {
        color: #ffffff;
        font-size: 1.4em;
        font-family: 'Inconsolate', monospace;

        &:hover {
            color: #848fa5;
        }
    }

    .customCards {
        max-width: 350px;
        min-height: 300px;
        align-items: center;
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

export const Project = () => {
    const [todos, setTodos] = useState(initialTodos)
  
    const toggleTodo: ToggleTodo = (selectedTodo) => {
      const newTodos = todos.map(todo => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      });
      setTodos(newTodos);
    };
  
    const addTodo: AddTodo = newTodo => {
      newTodo.trim() !== "" &&
      setTodos([...todos, {text: newTodo, complete: false }]);
    };

    return (
    <Styles>
        <div>
            <h1 className="title">Demos</h1>
            <CardDeck>
              <Card className="customCards">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoForm addTodo={addTodo}/>
             </Card>
             <Card className="customCards">
            <LoginDemo />
            </Card>
            </CardDeck>     
        </div>
    </Styles>
    )
}

