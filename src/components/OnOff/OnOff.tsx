import React, {memo, useState} from "react";
import styles from './OnOff.module.css'

export type PropsType = {
    isOn:boolean
    setOnHandler:(on:boolean)=>void
}
export const OnOff: React.FC<PropsType> = memo( ({isOn,setOnHandler}) => {
    console.log("OnOff rendering")
     const onStyle = {
        display: 'inline-block',
        border: '1px solid ',
        backgroundColor: isOn ? "green" : "grey",
        padding: '2px',
        marginLeft: '5px'
    }
    const offStyle = {
        display: 'inline-block',
        border: '1px solid ',
        backgroundColor: isOn ? "grey" : "red",
        padding: '2px'
    }

    const circle = {
        height: '15px',
        width: '15px',
        borderRadius: '10px',
        display: 'inline-block',
        backgroundColor: isOn ? 'green' : 'red',
        marginLeft: '5px'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>setOnHandler(true)}>On
            </div>
            <div style={offStyle} onClick={()=>setOnHandler(false)}>Off
            </div>
            <div style={circle}></div>
        </div>
    )
})