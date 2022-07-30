import React from 'react';
import style from './Scale.module.css';


function Scale({ number }) {

    let arr = [];

    for (let i = 1; i <= number; i++) {
        arr.unshift(i);
    }

    if (number < 5) {
        for (let i = 1; i <= (5 - number); i++) {
            arr.push(0);
        }
    }

    return (
        <div className={style.lineContainer}>
            {
                arr.map((num) => {
                    if (num === 0) {
                        return <div className={style.lineNull}></div>
                    } else {
                        return <div className={style.line}></div>
                    }
                })
            }
        </div>
    )
}

export default Scale;