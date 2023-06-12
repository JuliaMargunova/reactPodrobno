import React, {memo, useState} from "react";
import {StarType} from "../../App";

type StarPropsType = {
    selected: Boolean
    onClickStar: () => void
}

const Star = memo((props: StarPropsType) => {
    console.log("Star rendering")
    return <span onClick={props.onClickStar}>{(props.selected) ? <b>star </b> : 'star '}</span>
})

type RatingPropsType = {
    defaultValue?: StarType
    onChange: (value: StarType) => void
}

export const UncontrolledRating = memo((props: RatingPropsType) => {
    console.log('UncontrolledRating rendering')
    const [value, setValue] = useState<StarType>(props.defaultValue ? props.defaultValue : 0)
    let masStar: Array<StarType> = [1, 2, 3, 4, 5];
    return (
        <div>
            {masStar.map((i) => <>
                <Star key={i} selected={(i <= value) ? true : false} onClickStar={() => {
                    setValue(i);
                    props.onChange(i)
                }
                }/>
            </>)}
        </div>);
})