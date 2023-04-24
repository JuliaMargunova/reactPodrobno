import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setCollapsed:()=>void
}

export default function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} />
            {props.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionBody() {
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
    setCollapsed:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>;
}

