import React, {ChangeEvent} from "react";
import {MyBTN} from "./MyBTN";




export function Setter(props: any) {


    let valueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.setValueMax(e.currentTarget.value)
    let valueStartHandler = (e: ChangeEvent<HTMLInputElement>) => props.setValueStart(e.currentTarget.value)
    let setValue = () => props.setValueStart(props.setValueStart)

    return (<div>
        max value <input type={"number"} value={props.valueMax} onChange={valueMaxHandler}/>
        start value <input type={"number"} value={props.valueStart} onChange={valueStartHandler}/>
        <MyBTN onClick={setValue}>set</MyBTN>
    </div>)
}