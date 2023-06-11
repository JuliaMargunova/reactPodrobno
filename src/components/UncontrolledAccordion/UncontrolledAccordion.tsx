import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    //const [collapsed, setCollapsed] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.title} onClinckAccordionTitle={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {state.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>);
}

type AccordionTitlePropsType = {
    title: string
    onClinckAccordionTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onClinckAccordionTitle}>{props.title}</h3>;
}

