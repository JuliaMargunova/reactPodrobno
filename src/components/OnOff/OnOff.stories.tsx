import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {OnOff} from "./OnOff";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff',
    component: OnOff,
    tags: ['autodocs'],
    argTypes:{
        setOnHandler:{action:"isOn"}
    }
};

export default meta;
type Story = StoryObj<typeof OnOff>;
export const On: Story = {
    args: {
        isOn:true
    },
};

export const Off: Story = {
    args: {
        isOn:false
    },
};
const OnOffHook = () => {
    const [isOn, setOn] = useState<boolean>(false)
    return <OnOff isOn={isOn} setOnHandler={setOn}/>;
};
export const DefaultOnOff: Story = {
    render: () => <OnOffHook/>,
};