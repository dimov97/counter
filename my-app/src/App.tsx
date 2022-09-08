import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {Setting} from "./Setting";


function App() {
    let [maxValue, setMaxValue] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state)
        localStorage.setItem(key, stateAsString)
        setCurrentValue(minValue)
    }

    function restoreState<T>(key: string, defaultState: T) {
        let state = defaultState
        const stateAsString = localStorage.getItem(key)
        if (stateAsString !== null) state = JSON.parse(stateAsString) as T
        return state
    }
    const state = restoreState('test', {maxValue: 0, minValue: 0})

    let [currentValue, setCurrentValue] = useState(state.minValue)

    useEffect(() => {

        if (localStorage.getItem('test')) {
            setMaxValue(JSON.parse(localStorage.getItem('test')!).maxValue)
            setMinValue(JSON.parse(localStorage.getItem('test')!).minValue)
        }

    },[])



    return (
        <div className="App">
            <Setting
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                saveState={saveState}
            />
            <Counter
                state={state}
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}

            />
        </div>
    );
}

export default App;
