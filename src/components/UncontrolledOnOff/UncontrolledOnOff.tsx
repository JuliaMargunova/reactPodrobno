import React, {useState} from "react";
import styles from './UncontrolledOnOff.module.css'

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff: React.FC<PropsType> = (props) => {
    const [isOn, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

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
            <div style={onStyle} onClick={() => setOn(true)}>On
            </div>
            <div style={offStyle} onClick={() => setOn(false)} onChange={() => props.onChange(isOn)}>Off
            </div>
            <div style={circle}></div>
        </div>
    )

}