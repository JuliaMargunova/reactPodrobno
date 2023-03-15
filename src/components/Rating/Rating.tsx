import React from "react";

type StarPropsType = {
    selected: Boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}

type RatingPropsType = {
    value: 0|1|2|3|4|5
}

export function Rating(props: RatingPropsType) {
    let masStar: Array<number> = [1, 2, 3, 4, 5];
    return (
        <div>
            {masStar.map((i) => <Star key={i} selected={(i <= props.value) ? true : false}/>)}
        </div>);
}