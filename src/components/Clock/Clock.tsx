import React, {FC, useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClock/AnalogClockView";
import {DigitalClockView} from "./DigitalClock/DigitalClockView";


type PropsType = {
    mode?: "analog" | "digital"
}

const Clock: FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    /* return <div>
         <span>{get2digitsString(date.getHours())}</span>
         :<span>{get2digitsString(date.getMinutes())}</span>
         :<span>{get2digitsString(date.getSeconds())}</span>
     </div>*/
    //const dateTime = date.toISOString().slice(0, 16)
    //const time = date.toLocaleTimeString()

    //return <time dateTime={dateTime}>{time}</time>
    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }
    return (<div>
            {view}
        </div>
    );
}

export default Clock;

export type DigitalClockViewPropsType = {
    date: Date
}

export type AnalogClockViewPropsType = {
    date: Date
}
