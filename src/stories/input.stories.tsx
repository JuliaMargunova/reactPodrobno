import type {Meta, StoryObj} from '@storybook/react';
import {ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useRef, useState} from "react";

type InputType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<InputType> = {
    title: 'example/input',
    // component: input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UncontrolledInput: Story = {
    render: () => <input type="text"/>,
}

const TrackValueOfUncontrolledInputWithHooks = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input value={value} onChange={onChange}/> value: {value}
    </>
}
const GetValueOfUncontrolledInputByButtonPressWithHooks = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');
    const onClick = () => {
        const currentValue = inputRef.current ? inputRef.current.value : ""
        setValue(currentValue)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={onClick}/>
        value: {value}
    </>
}
export const TrackValueOfUncontrolledInput: Story = {
    render: () => <TrackValueOfUncontrolledInputWithHooks/>
}

export const GetValueOfUncontrolledInputByButtonPress: Story = {
    render: () => <GetValueOfUncontrolledInputByButtonPressWithHooks/>
}


