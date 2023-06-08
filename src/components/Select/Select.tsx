import React, {FC, useState} from 'react';
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
const Select: FC<PropsType> = (props) => {
    const [selectValue, setSelectValue] = useState<string | undefined>(props.value)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const selectedItem = props.items.find((el) => el.value === selectValue)
    return (
        <div className={s.select}>
            <div className={s.title} onClick={() => setCollapsed(!collapsed)}>
                <div>{selectedItem && selectedItem.title}</div>
                <img className={s.down} src={down}/>
            </div>
            {!collapsed && <div className={s.list}>
                {props.items.map((el, i) =>
                    <div key={i} onClick={() => {
                        setSelectValue(el.value)
                        setCollapsed(true)
                    }
                    }>{el.title} </div>)}
            </div>}
        </div>
    );
};

export default Select;
