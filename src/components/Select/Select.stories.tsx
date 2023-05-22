import React, {useState} from "react";
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {string} from "prop-types";
import Select from "./Select";

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        // setCollapsed:{action:'collapsed'},
    }
};

export default meta;
type Story = StoryObj<typeof Select>;
export const Hidden: Story = {
    args: {
        title: 'Menu',
        //collapsed:false,
        items: []
    },
};

export const Open: Story = {
    args: {
        title: 'Technology',
        //collapsed:true,
        items: [
            {title: 'item1', value: '1'},
            {title: 'item2', value: '2'},
            {title: 'item3', value: '3'},
            {title: 'item4', value: '4'},
            {title: 'item5', value: '5'}]
    },
};
const onClickCallback = action("some item was clicked")
const SelectWithHooks = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const items = [
        {title: 'item1', value: '1'},
        {title: 'item2', value: '2'},
        {title: 'item3', value: '3'},
        {title: 'item4', value: '4'},
        {title: 'item5', value: '5'}]
    return <Select title={"Menu"}
                   items={items}
                   onClick={onClickCallback}
        //collapsed={collapsed}
        //setCollapsed={()=>setCollapsed(!collapsed)}
    />;
};
export const DefaultAccordion: Story = {
    render: () => <SelectWithHooks/>,
};
