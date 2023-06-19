import {Meta, StoryObj} from '@storybook/react'
import Clock from "./Clock";
import React, {useState} from "react";
import {OnOff} from "../OnOff/OnOff";

const meta: Meta< typeof Clock> = {
    title: 'Clock',
    tags: ['autodocs'],
    component: Clock
}


export default meta
type Story = StoryObj<typeof Clock>

/*const ClockWithHook = () => {
    const [isOn, setOn] = useState<boolean>(false)
    return <Clock/>;
};*/



export const BaseAnalogExample: Story = {
    render: () => <Clock mode={"analog"}/>,
};

export const BaseDigitalExample: Story = {
    render: () => <Clock mode={"digital"}/>,
};
