import React, {FC} from "react";
import dial from "../../../images/dial.png";
import secondHand from "../../../images/second.png";
import minuteHand from "../../../images/minute.png";
import hourHand from "../../../images/hour.png";
import {AnalogClockViewPropsType} from "../Clock";
import s from './AnalogClock.module.css'

export const AnalogClockView: FC<AnalogClockViewPropsType> = ({date}) => {
    return <div className={s.app}>
        <div className={s.clock} style={{backgroundImage: `url(${dial})`}}>
            <div className={s.clock__type_sec} style={{
                backgroundImage: `url(${secondHand})`,
                transform: `rotate(${0.006 * (date.getSeconds() * 1000 + date.getMilliseconds())}deg)`
            }}></div>
            <div className={s.clock__type_min} style={{
                backgroundImage: `url(${minuteHand})`,
                transform: `rotate(${6 * (date.getMinutes() + date.getSeconds() / 60)}deg)`
            }}></div>
            <div className={s.clock__type_hour} style={{
                backgroundImage: `url(${hourHand})`,
                transform: `rotate(${30 * (date.getHours() + date.getMinutes() / 60)}deg)`
            }}></div>
        </div>
    </div>
};
