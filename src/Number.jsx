import React from 'react';
import { useSelector } from 'react-redux';
import style from "./App.module.css"

const Number = () => {
    const number = useSelector((state) => state.number)
    return (
        <div className={style.number}>
            {number}
        </div>
    );
};

export default Number;