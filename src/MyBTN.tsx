import React, {ButtonHTMLAttributes} from "react";

export const MyBTN = (props: ButtonHTMLAttributes<any>) => {
    return <button {...props}>{props.children}</button>
}