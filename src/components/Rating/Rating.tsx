import React from "react";
import {StarType} from "../../App";

type StarPropsType = {
    selected: Boolean
    onClick:(rating:StarType)=>void
    id:1|2|3|4|5
}

function Star(props: StarPropsType) {
    return <span onClick={()=>props.onClick(props.id)}>{props.selected?<b>star </b>:'star '}</span>
}

type RatingPropsType = {
    value: StarType
    setRatingValue:(rating:StarType)=>void
}

export function Rating(props: RatingPropsType) {
    let masStar: Array<1|2|3|4|5> = [1, 2, 3, 4, 5];
    const onClickStarHandler=(rating:StarType)=>{
       props.setRatingValue(rating)
    }
    return (
        <div>
            {masStar.map((i) => <Star key={i} id={i} selected={(i <= props.value) ? true : false} onClick={onClickStarHandler}/>)}
        </div>);
}