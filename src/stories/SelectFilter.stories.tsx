import React, {useMemo, useState} from "react";
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import Select from "../components/Select/Select";

const meta: Meta<typeof Select> = {
    title: 'Filter/Select',
    component: Select,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Select>;

const onClickCallback = action("some item was clicked")

export const SelectDefault: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [collapsed, setCollapsed] = useState<boolean>(true)
        type CountryObjType = {
            id: string,
            country: string,
            city: string,
            population: number
        }
        const countryObj: CountryObjType[] = [
            {id: '1', country: 'Russia', city: 'Moscow', population: 12000000},
            {id: '2', country: 'Russia', city: 'Ufa', population: 617000},
            {id: '3', country: 'Russia', city: 'Omsk', population: 617000},
            {id: '4', country: 'Belarus', city: 'Minsk', population: 1921000},
            {id: '5', country: 'Belarus', city: 'Slonim', population: 526000},
            {id: '6', country: 'Belarus', city: 'Mogilev', population: 374644},
        ]

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const items1 = useMemo(()=>{
            return countryObj.filter(el => el.country === "Belarus").map(el => ({value: el.id, title: el.city}))
        },[countryObj])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const items2 = useMemo(()=>{
            return countryObj.filter(el => el.city[0] === 'M').map(el => ({value: el.id, title: el.city}))
        },[countryObj])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const items3 = useMemo(()=>{
            return countryObj.filter(el => el.population >100000).map(el => ({value: el.id, title: el.city}))
        },[countryObj])
        const selectList = {
            display: 'flex',
            gap:'10px'
        }
        return <div style={selectList}>
            <Select title={"Menu"}
                    items={items1}
                    onClick={onClickCallback}
            />

            <Select title={"Menu"}
                    items={items2}
                    onClick={onClickCallback}
            />
            <Select title={"Menu"}
                    items={items3}
                    onClick={onClickCallback}
            />
        </div>
       ;
    },
};
