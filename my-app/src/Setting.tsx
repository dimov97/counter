import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from "./Setting.module.css"
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsType = {
    maxValue: number
    minValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setMinValue: Dispatch<SetStateAction<number>>
    setCount: (count:number)=>void
    error: string
}

export const Setting = (props: SettingsType) => {


    const maxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const minOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }

    const callBackButton = () => {
        props.setCount(props.minValue)
    }

    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <Input
                    title={"max value:"}
                    value={props.maxValue}
                    onChange={maxOnChange}
                    className={ props.error ? s.errorText : s.input}
                />
                <Input
                    title={"start value:"}
                    value={props.minValue}
                    onChange={minOnChange}
                    className={props.error ? s.errorText : s.input}
                />
            </div>
            <div className={s.buttonWrapper}>
                <Button styleButton={s.setButton} title={"set"} callBack={callBackButton} disable={props.minValue < 0 || props.maxValue <= 0 }/>
            </div>
        </div>
    );
};