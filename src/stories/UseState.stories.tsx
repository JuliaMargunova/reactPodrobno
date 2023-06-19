import {FC, memo, useMemo, useState} from 'react'

import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<any> = {
    title: 'useState/useState demo',
    tags: ['autodocs'],
}


export default meta
type Story = StoryObj<typeof meta>

function generateData() {
    return 1
}

export const Example1: Story = {

    render: () => {
        console.log('Example1')
// eslint-disable-next-line react-hooks/rules-of-hooks
        const initValue = useMemo(generateData, [])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(generateData)//[0,function(newValue){}]
        const incrementCounter = () => setCounter(prev => prev + 1)

        return (
            <>
                <button onClick={incrementCounter}>+</button>
                {counter}
            </>
        )
    },
}
