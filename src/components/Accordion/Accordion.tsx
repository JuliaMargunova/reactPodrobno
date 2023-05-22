import React, {FC} from "react";

type ItemType ={
    title:string,
    value:any
}
type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setCollapsed:()=>void
    items:ItemType[]
    onClick:(value:any)=>void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} />
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}
type PropsType ={
    items :ItemType[]
    onClick:(value:any)=>void
}
function AccordionBody({items, onClick}:PropsType) {
    return (
        <ul>
            {items.map((el,i)=><li onClick={()=>{onClick(el.value)}} key={i}>{el.title}</li>)}
        </ul>);
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>;
}

