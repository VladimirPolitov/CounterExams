import React, {useState} from 'react';
import Counter from "./Counter";
import {Setter} from "./Setter";






function App() {


    let [valueMax, setValueMax] = useState('0');
    let [valueStart, setValueStart] = useState('0');
    let [sum, setSum] = useState(valueStart);



    return (
        <div>
            <Setter valueMax={valueMax} setValueMax={setValueMax}
                    valueStart={valueStart} setValueStart={setValueStart}
            />
            <Counter counter={valueMax} sum={sum} setSum={setSum} />
        </div>)
}

export default App;
