import React from 'react';
import { useDispatch } from 'react-redux';
import style from "./App.module.css"

const ButtomDecrement = () => {
    const dispatch = useDispatch()

    const handleDecrement = () => {
        dispatch({type: "decrement"})
    }
    return (
        <button className={style.button} onClick={handleDecrement}>
            -
        </button>
    );
};

export default ButtomDecrement;