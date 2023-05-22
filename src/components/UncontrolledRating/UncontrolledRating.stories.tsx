import React, {useState} from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";

const meta: Meta<typeof UncontrolledRating> = {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UncontrolledRating>;

export const RatingChanging: Story = {
    render: () => <UncontrolledRating />,
};