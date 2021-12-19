import React from "react";
import "./App.css";
import {MyBTN} from "./MyBTN";

type counterType = {
    counter: string
    sum: any
    setSum: any

}

function Counter(props: counterType) {

    const test = props.sum > 0 ? 'buttonRes' : 'buttonResOff';
    const testFunc = () => {
            props.sum < props.counter &&  props.setSum(props.sum + 1)
    }
    const testFunc2 = () => props.setSum(0)

    return (
        <div className={'allCounter'}>
            <div
                className={props.sum >= props.counter ? 'counterRed' : 'counter'}>
                {props.sum}
            </div>

            <div className={'inc'}>
                <MyBTN className={props.sum >= props.counter ? 'buttonIncOff' : 'buttonInc'} onClick={testFunc}>
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