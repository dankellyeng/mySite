import React from 'react';
import { TodoListItem } from './TodoListItem';
import { ListGroup } from 'react-bootstrap';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ListGroup className="toDoList">
            <ListGroup.Item>
        {todos.map(todo => {
            return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
        })}
        </ListGroup.Item>
    </ListGroup>
    );
};
