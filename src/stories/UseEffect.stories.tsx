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
        }, [])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("useEffect first render and every counter change")
            document.title = counter.toString()
        }, [counter])

        return (
            <>
                <button onClick={() => setCounter(counter + 1)}>Counter+</button>
                <button onClick={() => setFake(fake + 1)}>Fake+</button>
                Hello ,{counter}
            </>
        )
    },
}

export const SetTimeoutExample: Story = {

    render: () => {
        console.log("SetTimeoutExample")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(1)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [fake, setFake] = useState(1)
        // eslint-disable-next-line react-hooks/rules-of-hooks

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("setTimeout")
            setTimeout(() => {
                document.title = counter.toString()
            }, 1000)
        }, [counter])

        return (
            <>
                <button onClick={() => setCounter(counter + 1)}>Counter+</button>
                <button onClick={() => setFake(fake + 1)}>Fake+</button>
                Hello ,{counter}
            </>
        )
    },
}

export const SetIntervalExample: Story = {

    render: () => {
        console.log("SetIntervalExample")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(1)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("setTimeout")
            setInterval(() => {
                //console.log("tick:" + counter)
                setCounter(state => state + 1)
            }, 1000)
        }, [])

        return (
            <>
                Hello ,counter:{counter}
            </>
        )
    },
}

export const ClockExample: Story = {
    render: () => {
        console.log("ClockExample")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [time, setTime] = useState(new Date())

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("setTimeout")
          const interval =  setInterval(() => {
                //console.log("tick:" + counter)
                setTime(new Date())
            }, 1000)
            return ()=>clearInterval(interval)
        }, [])
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const timeString = `${hours}:${minutes}:${seconds}`;
        return (
            <>
              {/*  <time dateTime={time.toISOString()}> {time.toLocaleTimeString()}</time>*/}
                <strong>Time: </strong>{ timeString}
            </>
        )
    },
}

export const ResetEffectExample: Story = {

    render: () => {
        console.log("ResetEffectExample")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(1)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            console.log("Effect occurred")

        }, [])

        return (
            <>
                Hello ,counter:{counter}
                <button onClick={()=>{setCounter(counter+1)}}>+</button>
            </>
        )
    }
}
