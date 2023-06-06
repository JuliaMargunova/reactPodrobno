import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {Rating} from "./Rating";
import {StarType} from "../../App";

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes:{
        setRatingValue:{action:"rating"}
    }
};

export default meta;
type Story = StoryObj<typeof Rating>;


export const Rating1: Story = {
    args: {
        value:1
    },
};
export const Rating2: Story = {
    args: {
        value:2
    },
};
export const Rating3: Story = {
    args: {
        value:3
    },
};
export const Rating4: Story = {
    args: {
        value:4
    },
};
export const Rating5: Story = {
    args: {
        value:4
    },
};
const RatingHook = () => {
    const [ratingValue, setRatingValue] = useState<StarType>(3)
    return <Rating value={ratingValue} setRatingValue={setRatingValue}/>
};
export const DefaultRating: Story = {
    render: () => <RatingHook/>,
};
