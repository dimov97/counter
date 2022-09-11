import React, {ChangeEvent} from 'react';
import s from "./Setting.module.css";

type InputType = {
    title:string
    value:number
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
    className:string
}

export const Input:React.FC<InputType> = ({value,onChange,title, className}) => {

    return (
        <div className={s.textSetting}>
            <p className={s.pText}>{title}</p>
            <input
                value={value}
                onChange={onChange}
                className={className}
                type="number"
            />
        </div>
    );
};

