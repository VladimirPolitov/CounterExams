import React, {useState} from 'react';
import Counter from "./Counter";
import {Setter} from "./Setter";
import {MyBTN} from "./MyBTN";

function App() {


    let [valueMax, setValueMax] = useState('0');
    let [valueStart, setValueStart] = useState('0');
    let [counter, setCounter] = useState('0')
    let [counterMax, setCounterMax] = useState('0')

    let setValue = () => {return (setCounter(valueStart), setCounterMax(valueMax))}


        return (
            <div>
                <MyBTN onClick={setValue}>set</MyBTN>
                <Setter valueMax={valueMax} setValueMax={setValueMax}
                        valueStart={valueStart} setValueStart={setValueStart}
                />
                <Counter counter={counter} valueMax={valueMax} setValueMax={setValueMax}
                         counterMax={counterMax}
                />
            </div>)
    }

export default App;
