import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import { enableLogin } from '../actions';

interface RootState {
    isLogged: boolean;
}



export const LoginDemo = () => {

    const selectisLogged = (state: RootState) => state.isLogged;

    const isLogged = useSelector(selectisLogged);

    const dispatch = useDispatch();


 
    return (
        <div className="toDoList ">
        
        <Button className="globalButtonSml" onClick={() => dispatch(enableLogin())} variant="primary">Login</Button>
        { !isLogged?
            <h6>Not Logged in</h6>
            :
            <h6>Logged in!</h6>
        }
        </div>
    )
}