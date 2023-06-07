import React, {useState} from "react";
import type {Meta, StoryObj} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";

const meta: Meta<typeof UncontrolledRating> = {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
    tags: ['autodocs'],
    argTypes: {
        onChange: {action: "change star"}
    }
};

export default meta;
type Story = StoryObj<typeof UncontrolledRating>;

export const RatingChanging: Story = {
    args: {defaultValue: 0}
};
export const Rating1: Story = {
    render: () => <UncontrolledRating defaultValue={1} onChange={() => {
    }}/>,
};
export const Rating2: Story = {
    render: () => <UncontrolledRating defaultValue={2} onChange={() => {
    }}/>,
};
export const Rating3: Story = {
    render: () => <UncontrolledRating defaultValue={3} onChange={() => {
    }}/>,
};
export const Rating4: Story = {
    render: () => <UncontrolledRating defaultValue={4} onChange={() => {
    }}/>,
};
export const Rating5: Story = {
    render: () => <UncontrolledRating defaultValue={5} onChange={() => {
    }}/>,
};