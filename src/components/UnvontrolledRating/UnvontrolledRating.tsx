import React, {useState} from "react";
import {StarType} from "../../App";
type StarPropsType = {
    selected: Boolean
    onClickStar:()=>void
}

function Star(props: StarPropsType) {
    return <span onClick={props.onClickStar} >{(props.selected) ? <b>star </b> : 'star '}</span>
}

type RatingPropsType = {}

export function UnvontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState<StarType>(0)
    let masStar: Array<StarType> = [ 1, 2, 3, 4,5];
    return (
        <div>
            {masStar.map((i) => <>
                <Star key={i} selected={(i <= value) ? true : false} onClickStar={()=>setValue(i)} />
            </>)}
        </div>);
}