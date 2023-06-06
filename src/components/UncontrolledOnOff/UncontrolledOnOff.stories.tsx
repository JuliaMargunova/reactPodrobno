import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff'

const meta: Meta<typeof UncontrolledOnOff> = {
    title: 'Components/UncontrolledOnOff',
    component: UncontrolledOnOff,
    tags: ['autodocs'],
    argTypes:{
        onChange:{action:"on or clicked"}
    }
};

export default meta;
type Story = StoryObj<typeof UncontrolledOnOff>;

export const ModeChangingOnOff: Story = {
    render: () => <UncontrolledOnOff defaultOn={true} onChange={x=>x} />,
};