import {FC, memo, useEffect, useMemo, useState} from 'react'

import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<any> = {
    title: 'useEffect/useEffect demo',
    tags: ['autodocs'],
}


export default meta
type Story = StoryObj<typeof meta>


export const SimplyExample: Story = {

    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(1)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [fake, setFake] = useState(1)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("useEffect every render")
            document.title = counter.toString()
        })
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("useEffect only first render(componentDidMound)")
            document.title = counter.toString()
        },[])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("useEffect first render and every counter change")
            document.title = counter.toString()
        },[counter])

        return (
            <>
                <button onClick={() => setCounter(counter + 1)}>Counter+</button>
                <button onClick={() => setFake(fake + 1)}>Fake+</button>
                Hello ,{counter}
            </>
        )
    },
}
