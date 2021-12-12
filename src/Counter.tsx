import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from "react";
import "./App.css";

type counterType = {
    counter: number
}

function Counter(props: counterType) {

    let [sum, setSum] = useState(0);

    const test = sum > 0 ? 'buttonRes' : 'buttonResOff';

    const testFunc = () => {
            sum < props.counter &&  setSum(sum + 1)
    }

    const testFunc2 = () => setSum(0)

    return (
        <div className={'allCounter'}>
            <div
                className={sum >= props.counter ? 'counterRed' : 'counter'}>
                {sum}
            </div>
            <div className={'inc'}>
                <MyBTN
                    className={sum >= props.counter ? 'buttonIncOff' : 'buttonInc'}
                    onClick={testFunc}
                >
                    ВВОД
                </MyBTN>
            </div>
            <div className={'reset'}>
                <MyBTN className={test} onClick={testFunc2}>СБРОС</MyBTN>
            </div>
        </div>
    )
}


const MyBTN = (props: ButtonHTMLAttributes<any>) => {
    return <button {...props}>{props.children}</button>
}

export default Counter;