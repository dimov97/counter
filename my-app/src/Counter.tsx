import React, {Dispatch, SetStateAction} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'

type CounterType = {
    counter: number
    setCounter: Dispatch<SetStateAction<number>>
    maxValue: number
    minValue: number
    error: string
}

export const Counter = (props: CounterType) => {


    // const counterStyle = {
    //     color: props.counter >= props.maxValue ? "red" : ""
    // }

    const disableInc = props.counter >= props.maxValue||props.maxValue===props.minValue||props.minValue>props.maxValue
    const disableReset = props.counter <= props.minValue

    const counterMaxValue = {
        color: props.counter === props.maxValue ? "red" : ""
    }
    const IncButton = () => {
        props.setCounter( props.counter + 1)
    }
    const ResetButton = () => {
        props.setCounter(props.minValue)
    }

    return (
        <div className={s.counter}>
            <div style={counterMaxValue} className={props.error===''?s.counterStyle:s.error }>
                {props.error || props.counter}
            </div>
            <div className={s.buttonWrapper}>
                <Button styleButton={s.Button} disable={disableInc} title="Inc" callBack={IncButton}/>
                <Button styleButton={s.Button} disable={disableReset} title="Reset" callBack={ResetButton}/>
            </div>
        </div>
    );
};