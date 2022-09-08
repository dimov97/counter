import React, {FC} from 'react';

interface ButtonType {
    title: string
    callBack: () => void
    disable?:boolean
    styleButton:string
}

export const Button: FC<ButtonType> = ({title, callBack,disable,styleButton}) => {
    return (
        <button className={styleButton} disabled={disable} onClick={() => callBack()}>{title}</button>
    );
};

