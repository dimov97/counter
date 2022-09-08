import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from "./Setting.module.css"
import {Button} from "./Button";
import b from './Button.module.css'

type SettingType = {
    maxValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    minValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    saveState: <T>(key: string, state: T) => void
}
export const Setting: React.FC<SettingType> = ({maxValue, setMaxValue, minValue, setMinValue, saveState}) => {

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }

    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <div className={s.textSetting}>
                    <p className={s.pText}>max value:</p>
                    <input
                        value={maxValue}
                        onChange={setMaxValueHandler}
                        className={s.input}
                        type="number"
                    />
                </div>
                <div className={s.textSetting}>
                    <p className={s.pText}>start value:</p>
                    <input
                        value={minValue}
                        onChange={setMinValueHandler}
                        className={s.input}
                        type="number"
                    />
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button styleButton={b.button}
                        title={"set"}
                        callBack={() => saveState('test', {maxValue: maxValue, minValue: minValue})}
                />
            </div>
        </div>
    );
};