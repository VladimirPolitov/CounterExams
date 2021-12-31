import React, {ChangeEvent} from "react";
import "./App.css";


export function Setter(props: any) {


    let valueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.setValueMax(e.currentTarget.value)
    let valueStartHandler = (e: ChangeEvent<HTMLInputElement>) => props.setValueStart(e.currentTarget.value)


    return (
        <div className={'setter'}>
            <div>
                max value <input className={'inputMax'}
                                 type={"number"}
                                 value={props.valueMax}
                                 onChange={valueMaxHandler}/>
            </div>
            <div>
                start value <input className={'inputStart'}
                                   type={"number"}
                                   value={props.valueStart}
                                   onChange={valueStartHandler}/>
            </div>
        </div>)
}