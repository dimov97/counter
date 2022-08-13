import React, {useState} from 'react';


const Counter = () => {
    let [counter, setCounter] = useState<number>(0)

    const inc = () => {
        if(counter < 5) {
            setCounter(counter + 1)
        }
    }
    const reset = () => {
        setCounter(0)

    }
    return (
        <>
            <div className={counter === 5 ? 'red' : ''}>{counter}</div>
            <button className={counter === 5 ? 'black' : ''} onClick={()=>{inc()}}>icn</button>
            <button className={counter === 0 ? 'black' : ''} onClick={()=>{reset()}}>reset</button>
        </>
    );
};

export default Counter;