import React, {FC, memo} from "react";

type ItemType = {
    title: string,
    value: any
}
type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setCollapsed: () => void
    /**
     * elements
     **/
    items: ItemType[]
    onClick: (value: any) => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} color={props.color}/>
            {props.collapsed &&
                <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type PropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const  AccordionBody=memo(({items, onClick}: PropsType)=> {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {items.map((el, i) => <li onClick={() => {
                onClick(el.value)
            }} key={i}>{el.title}</li>)}
        </ul>);
})

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    color?: string
}

const AccordionTitle = memo((props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return <h3 style={{"color": props.color ? props.color : "black"}} onClick={props.setCollapsed}>{props.title} </h3>;
})

