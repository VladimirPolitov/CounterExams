import React from "react";
import "./App.css";
import {MyBTN} from "./MyBTN";

type counterType = {
    counter: number
    counterMax: number
    setCounter: any
    valueStart: number
}


function Counter(props: counterType) {

    const insert = () => {
        props.counter < props.counterMax && props.setCounter(Number(props.counter) + 1)
    }
    const reset = () => props.setCounter(props.valueStart)

    return (
        <div>
            <div
                className={props.counter >= props.counterMax ? 'counterRed' : 'counter'}>
                {props.counter}
            </div>

            <div className={'inc'}>
                <MyBTN className={props.counter >= props.counterMax ? 'buttonIncOff' : 'buttonInc'}
                       onClick={insert}>
                    INC
                </MyBTN>

                <MyBTN className={props.counter >= props.counterMax ? 'buttonRes' : 'buttonResOff'}
                       onClick={reset}>RES</MyBTN>
            </div>
        </div>
    )
}


export default Counter;