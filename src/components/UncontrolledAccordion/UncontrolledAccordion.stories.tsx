import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>;

export const ModeChangingAccordion: Story = {
    render: () => <UncontrolledAccordion title={'Menu'}/>,
};
