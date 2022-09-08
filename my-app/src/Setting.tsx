import React from 'react';
import s from "./Setting.module.css"
import {Button} from "./Button";
import b from './Button.module.css'

export const Setting = () => {
    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <div className={s.textSetting}>
                    <p className={s.pText}>max value:</p>
                    <input
                        className={s.input}
                        type="number"
                    />
                </div>
                <div className={s.textSetting}>
                    <p className={s.pText}>start value:</p>
                    <input
                        className={s.input}
                        type="number"
                    />
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button styleButton={b.button} title={"set"} callBack={() =>{}}/>
            </div>
        </div>
    );
};