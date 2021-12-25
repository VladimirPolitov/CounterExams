import React from "react";
import "./App.css";
import {MyBTN} from "./MyBTN";

type counterType = {
    counter: any
    valueMax: any
    setValueMax: any
    counterMax: any
}


function Counter(props: counterType) {

    const test = props.counter > props.valueMax ? 'buttonRes' : 'buttonResOff';
    const testFunc = () => {props.counter < props.valueMax && props.counter(props.counter + 1)}
    const testFunc2 = () => props.setValueMax(0)

    return (
        <div className={'allCounter'}>
            <div
                className={props.valueMax >= props.counter ? 'counterRed' : 'counter'}>
                {props.counter}
            </div>



            <div className={'inc'}>
                <MyBTN className={props.valueMax >= props.counter ? 'buttonIncOff' : 'buttonInc'} onClick={testFunc}>
                    ВВОД
                </MyBTN>
            </div>



            <div className={'reset'}>
                <MyBTN className={test} onClick={testFunc2}>СБРОС</MyBTN>
            </div>
        </div>
    )
}


export default Counter;