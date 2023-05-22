import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed,setCollapsed]= useState<boolean>(false);
    return (
        <div>
            <AccordionTitle title={props.title} onClinckAccordionTitle={()=>setCollapsed(!collapsed)}/>
            {collapsed && <AccordionBody/>}
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
    onClinckAccordionTitle:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClinckAccordionTitle}>{props.title}</h3>;
}

