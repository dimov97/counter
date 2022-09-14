import React, {useEffect, useState} from 'react';
import './App.css';
import {Setting} from "./Setting";
import {Counter} from "./Counter";


function App() {
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        let startValueAsString = localStorage.getItem('minValue')
        if (startValueAsString) {
            setMinValue(JSON.parse(startValueAsString))
            setCount(JSON.parse(startValueAsString))
        }

        let maxValueAsString = localStorage.getItem('maxValue')
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('minValue', String(minValue))
    //     localStorage.setItem('maxValue', String(maxValue))
    // }, [maxValue, minValue])


    useEffect(() => {
        if (maxValue === minValue || minValue > maxValue || maxValue <= 0 || minValue < 0) {
            setError("Incorrect value!")
        } else {
            setError("")
        }
    }, [maxValue, minValue])


    return (
        <div className="App">
            <Setting

                maxValue={maxValue}
                setMaxValue={setMaxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                setCount={setCount}
                error={error}
            />
            <Counter
                counter={count}
                setCounter={setCount}
                maxValue={maxValue}
                minValue={minValue}
                error={error}
            />
        </div>
    );
}

export default App;