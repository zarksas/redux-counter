import React from 'react';
import { useDispatch } from 'react-redux';
import style from "./App.module.css"

const Reset = () => {
    const dispatch = useDispatch();
    
    const handleReset = () => {
        dispatch({type: "reset"})
    }
    return (
        <button className={style.button} onClick={handleReset}>
            Сброс
        </button>
    );
};

export default Reset;