import React, {FC, useState, KeyboardEvent, useEffect, memo} from 'react';
import down from '../../icon/down.png';
import s from './select.module.css'

type ItemType = {
    title: string,
    value: any
}

type PropsType = {
    title: string,
    items: ItemType[]
    onClick?: (value: any) => void
    value?: string
}
const Select: FC<PropsType> = memo((props) => {
    console.log("Select rendering")
    const [selectValue, setSelectValue] = useState(props.value)
    const [hoverValue, setHoverValue] = useState(props.value)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const selectedItem = props.items.find((el) => el.value === selectValue)
    let hoveredItem = props.items.find((el) => el.value === hoverValue)

    useEffect(() => {
        setSelectValue(hoverValue)
    }, [hoverValue])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i <= props.items.length; i++) {
                if (props.items[i] === hoveredItem) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        setHoverValue(pretendentElement.value);
                        return
                    }
                }
                if (!selectedItem) {
                    setHoverValue(props.items[0].value);
                }
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setSelectValue(hoverValue)
            setCollapsed(true)
        }
    }
    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0} onBlur={()=>setCollapsed(true)}>
            <div className={s.title} onClick={() => setCollapsed(!collapsed)} >
                <div>{selectedItem ? selectedItem.title : props.title}</div>
                <img className={s.down} src={down}/>
            </div>
            {!collapsed && <div className={s.lists}>
                {props.items.map((el, i) =>
                    <div
                        onMouseEnter={() => setHoverValue(el.value)}
                        className={s.list + " " + (hoveredItem === el ? s.active : "")}
                        key={i}
                        onClick={() => {
                            setSelectValue(el.value)
                            setCollapsed(true)
                        }
                        }>{el.title} </div>)}
            </div>}
        </div>
    );
})

export default Select;
