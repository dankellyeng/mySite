import React from 'react';
import "../App.css";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleTodo
}) => {
    return (
    <li className="todoList"
        ><label className={todo.complete ? "complete" : undefined}>
            <input 
            type="checkbox" 
            checked={todo.complete} 
            onChange={() => toggleTodo(todo)} 
            />
            {todo.text}
            </label>
            </li>
    );
};