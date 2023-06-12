import {FC, memo, useMemo, useState} from 'react'

import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<any> = {
    title: 'useMemo/memo',
    tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const DifficultCountingExample: Story = {
    render: () => {
        console.log('Example1')
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [a, setA] = useState<number>(3)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [b, setB] = useState<number>(3)
        let resultA = 1;
        let resultB = 1;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        resultA = useMemo(() => {
            let tempResultA = 1;
            for (let i = 1; i <= a; i++) {
                let fake = 0;
                while (fake < 100000000) {
                    fake++;
                    const fakeValue = Math.random()
                }
                tempResultA *= i;
            }
            return tempResultA
        }, [a])

        for (let i = 1; i <= b; i++) {
            resultB *= i;
        }
        return (
            <>
                <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
                <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
                <hr/>
                <div>
                    Result for a: {resultA}
                </div>
                <div>
                    Result for b: {resultB}
                </div>
            </>
        )
    },
}


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

export const HelpsToReactMemo : Story = {

    render: () => {
        console.log("HelpsToReactMemo rendering")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(0)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [users, setUsers] = useState<string[]>(["Sveta","Olga","Julia","Valery"])

        const incrementCounter = () => setCounter(prev => prev + 1)
        const addUser = () => {
            setUsers([...users, `Irina ${new Date().getTime()}`])
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const newArray = useMemo(()=>{
            return users.filter(u=>u.toLowerCase().indexOf('a')>-1)
        },[users])

        return (
            <>
                <button onClick={incrementCounter}>+</button>{counter}
                <button onClick={addUser}>Add user</button>
                <Users users={newArray} />
            </>
        )
    },
}