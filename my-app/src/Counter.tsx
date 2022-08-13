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
        <div className='counter'>
            <div className='number'><span className={counter === 5 ? 'red' : ''}>{counter}</span></div>
            <div className='button-wrapper'>
                <button className={counter === 5 ? 'active' : ''} onClick={() => {
                    inc()
                }}>icn
                </button>
                <button className={counter === 0 ? 'active' : ''} onClick={() => {
                    reset()
                }}>reset
                </button>
            </div>

        </div>
    );
};

export default Counter;