import React, {FC, useEffect, useState} from 'react';
import dial from '../../images/dial.png';
import secondHand from '../../images/second.png';
import minuteHand from '../../images/minute.png';
import hourHand from '../../images/hour.png';
import s from './Clock.module.css'


type PropsType = {
    mode?:"analog"|"digital"
}
const get2digitsString = (num: number) => num < 10 ? "0" : num
const Clock: FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const intervalId =  setInterval(() => {
          console.log("TICK")
            setDate(new Date())
        }, 1000)

        return ()=>{
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
    return (
        <div className={s.app}>
        <div className={s.clock} style={{backgroundImage: `url(${dial})`}}>
            <div className={s.clock__type_sec} style={{
                backgroundImage: `url(${secondHand})`,
                transform: `rotate(${0.006*(date.getSeconds()*1000 + date.getMilliseconds())}deg)`}}></div>
            <div className={s.clock__type_min} style={{
                backgroundImage: `url(${minuteHand})`,
                transform: `rotate(${6*(date.getMinutes() + date.getSeconds()/60)}deg)`}}></div>
            <div className={s.clock__type_hour} style={{
                backgroundImage: `url(${hourHand})`,
                transform: `rotate(${30*(date.getHours() + date.getMinutes()/60)}deg)`}}></div>
        </div>
        </div>
    );
}

export default Clock;
