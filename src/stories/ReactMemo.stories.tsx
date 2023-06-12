import { FC, memo, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Counter | typeof Users> = {
    title: 'ReactMemo/memo',
    tags: ['autodocs'],
}

type CounterPropsType = {
    count: number
}
const Counter: FC<CounterPropsType> = memo(({ count }) => {
    return <div>{count}</div>
})

type UsersPropsType = {
    users: string[]
}
const Users: FC<UsersPropsType> = memo(({ users }) => {
    console.log('USERS')

    return (
        <div>
            {users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    )
})

export default meta
type Story = StoryObj<typeof meta>

export const Example1: Story = {
    render: () => {
        console.log('Example1')

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(0)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [users, setUsers] = useState<string[]>(["Sveta","Olga","Julia","Valery"])

        const incrementCounter = () => setCounter(prev => prev + 1)
        const addUser = () => {
            setUsers([...users, `Irina ${new Date().getTime()}`])
        }

        return (
            <>
                <button onClick={incrementCounter}>+</button>
                <button onClick={addUser}>Add user</button>
                <Counter count={counter} />
                <Users users={users} />
            </>
        )
    },
}