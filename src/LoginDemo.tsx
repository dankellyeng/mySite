import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {enableLogin} from './actions';
import { Button } from 'react-bootstrap';

interface RootState {
    isLogged: boolean;
}



export const LoginDemo = () => {

    const selectisLogged = (state: RootState) => state.isLogged;

    const isLogged = useSelector(selectisLogged);

    const dispatch = useDispatch();


 
    return (
        <div>
        
        <Button  onClick={() => dispatch(enableLogin())} variant="primary">Login</Button>
        { !isLogged?
            <h6>Not Logged in</h6>
            :
            <h6>Logged in!</h6>
        }
        </div>
    )
}