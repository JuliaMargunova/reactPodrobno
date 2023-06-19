import React, {FC} from "react";
import {DigitalClockViewPropsType} from "../Clock";
export const get2digitsString = (num: number) => num < 10 ? "0" : num
export const DigitalClockView: FC<DigitalClockViewPropsType> = ({date}) => {
    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :<span>{get2digitsString(date.getMinutes())}</span>
        :<span>{get2digitsString(date.getSeconds())}</span>
    </div>
};
