import React, {Dispatch, SetStateAction} from 'react';
import {Button} from "./Button";
import s from './Button.module.css'
import c from './Counter.module.css'

type CounterType = {
    state: { maxValue: number; minValue: number; }
    currentValue: number
    setCurrentValue: Dispatch<SetStateAction<number>>

}

const Counter:React.FC<CounterType> = ({state,currentValue,setCurrentValue}) => {



    const inc = () => {
        if (currentValue < state.maxValue) {
            setCurrentValue(currentValue + 1)
        }
    }
    const reset = () => {
        setCurrentValue(state.minValue)
    }
    const disableInc = () => currentValue >= state.maxValue
    const disableReset = () => currentValue === state.minValue

    return (
        <div className={c.counter}>
            <div className={c.number}><span className={currentValue === state.maxValue ? c.red : ''}>{currentValue}</span></div>
            <div className={c.button_wrapper}>
                <Button styleButton={s.button} disable={disableInc()}  callBack={inc} title={'inc'}/>
                <Button styleButton={s.button} disable={disableReset()} callBack={reset} title={'reset'}/>
            </div>

        </div>
    );
};

export default Counter;