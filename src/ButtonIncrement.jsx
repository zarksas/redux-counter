import React from 'react';
import { useDispatch } from 'react-redux';
import style from "./App.module.css"

const ButtonIncrement = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({type: "increment"})
    }

    return (
        <button className={style.button} onClick={handleIncrement}>
            +
        </button>
    );
};

export default ButtonIncrement;