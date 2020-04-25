import React, { useState, ChangeEvent, FormEvent } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {enableLogin} from './actions';


interface AddTodoFormProps {
    addTodo: AddTodo;
}

interface RootState {
    isLogged: boolean;
}



export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const[newTodo, setNewTodo] = useState("");

    const selectisLogged = (state: RootState) => state.isLogged;

    const isLogged = useSelector(selectisLogged);

    const dispatch = useDispatch();

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
        <form>
        <input type="text" value={newTodo} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
        <button onClick={() => dispatch(enableLogin())}>Login</button>
        { !isLogged?
            <h6>Not Logged in</h6>
            :
            <h6>Logged in!</h6>
        }
        </div>
    );
};