import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Button.module.css'
import c from './App.module.css'


const Counter = () => {
    let [counter, setCounter] = useState<number>(0)

    const inc = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    }
    const reset = () => {
        setCounter( 0)
    }
    const disableInc = () => counter >= 5
    const disableReset = () => counter === 0

    return (
        <div className={c.counter}>
            <div className={c.number}><span className={counter === 5 ? c.red : ''}>{counter}</span></div>
            <div className={c.button_wrapper}>
                <Button styleButton={s.button} disable={disableInc()}  callBack={inc} title={'inc'}/>
                <Button styleButton={s.button} disable={disableReset()} callBack={reset} title={'reset'}/>
            </div>

        </div>
    );
};

export default Counter;