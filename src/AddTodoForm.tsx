import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

interface RootState {
    isLogged: boolean;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const[newTodo, setNewTodo] = useState("");

   
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");

    }
 
    return (
        <div>
        <Form>
        <Form.Control type="text" value={newTodo} onChange={handleChange}/>
        <Button type="submit" onClick={handleSubmit}>Add Todo</Button>
        </Form>
        
        </div>
    );
};