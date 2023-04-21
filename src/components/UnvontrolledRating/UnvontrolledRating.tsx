import React, {useState} from "react";
type StarPropsType = {
    selected: Boolean
    onClickStar:()=>void
}

function Star(props: StarPropsType) {
    return (props.selected) ?<span onClick={props.onClickStar} ><b>star </b></span> : <span onClick={props.onClickStar}>star </span>
}

type RatingPropsType = {}
export type StarType = 0 | 1 | 2 | 3 | 4 | 5;
export function UnvontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    let masStar: Array<StarType> = [ 1, 2, 3, 4,5];
    return (
        <div>
            {masStar.map((i) => <>
                <Star key={i} selected={(i <= value) ? true : false} onClickStar={()=>setValue(i)} />
            </>)}
        </div>);
}