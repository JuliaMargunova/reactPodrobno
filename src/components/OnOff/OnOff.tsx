import React, {useState} from "react";
import styles from './OnOff.module.css'


export const OnOff = () => {
    const [isOn,setOn]= useState<boolean>(false)
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
            <div style={onStyle} onClick={()=>setOn(!isOn)}>On
            </div>
            <div style={offStyle} onClick={()=>setOn(!isOn)}>Off
            </div>
            <div style={circle}></div>
        </div>
    )
}