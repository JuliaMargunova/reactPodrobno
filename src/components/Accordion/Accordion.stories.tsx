import React, {useState} from "react";
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion'

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    args: {
        items: [
            {title: 'item1', value: '1'},
            {title: 'item2', value: '2'},
            {title: 'item3', value: '3'},
            {title: 'item4', value: '4'},
            {title: 'item5', value: '5'}]
    },
    argTypes: {
        setCollapsed: {action: 'collapsed'},
        color: {
            control: 'color',
            table: {category: 'Color'}
        },
    }
};

export default meta;
type Story = StoryObj<typeof Accordion>;
export const Hidden: Story = {
    args: {
        title: 'Menu',
        collapsed: false
    },
};

export const Open: Story = {
    args: {
        title: 'Technology',
        collapsed: true
    },
};
const onClickCallback = action("some item was clicked")
const AccordionWithHooks = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const items = [
        {title: 'item1', value: '1'},
        {title: 'item2', value: '2'},
        {title: 'item3', value: '3'},
        {title: 'item4', value: '4'},
        {title: 'item5', value: '5'}]
    return <Accordion title={"Menu"}
                      items={items}
                      onClick={onClickCallback}
                      collapsed={collapsed}
                      setCollapsed={() => setCollapsed(!collapsed)}/>;
};
export const DefaultAccordion: Story = {
    render: () => <AccordionWithHooks/>,
};
