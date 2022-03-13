import React from 'react';
import { useDispatch } from 'react-redux';
import style from "./App.module.css"

const Random = () => {
    const dispatch = useDispatch();

    const handleRandom = () => {
        dispatch({type: "random"})
    }
    return (
        <button className={style.button} onClick={handleRandom}>
            Рандом
        </button>
    );
};

export default Random;