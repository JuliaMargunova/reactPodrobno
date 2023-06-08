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
    value?:string
}
const Select: FC<PropsType> = (props) => {
    const [title, setTitle] = useState<string>(props.title)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div className={s.select}>
            <div className={s.title} onClick={()=>setCollapsed(!collapsed)}>
                <div>{title}</div>
                <img className={s.down} src={down}/>
            </div>
            {!collapsed && <div className={s.list}>
                {props.items.map((el, i) =>
                    <div key={i} onClick={()=>{
                        setTitle(el.title)
                        setCollapsed(true)
                    }
                    }>{el.title} </div>)}
            </div>}
        </div>
    );
};

export default Select;
