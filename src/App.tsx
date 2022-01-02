import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import {Setter} from "./Setter";
import {MyBTN} from "./MyBTN";
import "./App.css";


function App() {


    let [valueMax, setValueMax] = useState(0)
    let [valueStart, setValueStart] = useState(0)
    let [counter, setCounter] = useState(0)
    let [counterMax, setCounterMax] = useState(0)

    useEffect(()=>{
        let maxValue = localStorage.getItem('valueMax')
        if (maxValue) {
            let newMaxValue = JSON.parse(maxValue)
            setValueMax(newMaxValue)
        }
    },[])

    useEffect(()=>{
        let startValue = localStorage.getItem('valueStart')
        if (startValue) {
            let newStartValue = JSON.parse(startValue)
            setValueStart(newStartValue)
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('valueStart', JSON.stringify(valueStart))
    }, [valueStart])

    useEffect(()=>{
        localStorage.setItem('valueMax', JSON.stringify(valueMax))
    }, [valueMax])

    let setValue = () => {
        return (setCounter(valueStart), setCounterMax(valueMax))
    }


    return (
        <div className={'allCounter'}>
            <div className={'leftCount'}>
                <Setter valueMax={valueMax}
                        setValueMax={setValueMax}
                        valueStart={valueStart}
                        setValueStart={setValueStart}
                />
                <MyBTN className={'buttonInc'} onClick={setValue}>SET</MyBTN>
            </div>
            <div className={'rightCount'}>
                <Counter counter={counter}
                         counterMax={counterMax}
                         setCounter={setCounter}
                         valueStart={valueStart}
                />
            </div>
        </div>)
}

export default App;
