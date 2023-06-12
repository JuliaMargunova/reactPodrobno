import {FC, memo, useCallback, useMemo, useState} from 'react'

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
const Users: FC<UsersPropsType> = memo(({users}) => {
    console.log('USERS')

    return (
        <div>
            {users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    )
})

export const HelpsToReactMemo: Story = {

    render: () => {
        console.log("HelpsToReactMemo rendering")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(0)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [users, setUsers] = useState<string[]>(["Sveta", "Olga", "Julia", "Valery"])

        const incrementCounter = () => setCounter(prev => prev + 1)
        const addUser = () => {
            setUsers([...users, `Irina ${new Date().getTime()}`])
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const newArray = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('a') > -1)
        }, [users])

        return (
            <>
                <button onClick={incrementCounter}>+</button>
                {counter}
                <button onClick={addUser}>Add user</button>
                <Users users={newArray}/>
            </>
        )
    },
}

export const LikeUseCallback: Story = {

    render: () => {
        console.log("LikeUseCallback rendering")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = useState(0)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [books, setBooks] = useState<string[]>(["React", "JS", "CSS", "HTML"])

        const incrementCounter = () => setCounter(prev => prev + 1)
        const addBook = () => {
            setBooks([...books, `ANGULAR ${new Date().getTime()}`])
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const memoizedAddBook = useMemo(()=>{
           // return addBook
            return () => {
                console.log(books)
                setBooks([...books, `ANGULAR ${new Date().getTime()}`])
            }
        }, [books])

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const memoizedAddBook2 = useCallback(()=>{
            // return addBook
            console.log(books)
                setBooks([...books, `ANGULAR ${new Date().getTime()}`])

        }, [books])

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const newArray = useMemo(() => {
            return books.filter(u => u.toLowerCase().indexOf('a') > -1)
        }, [books])

        return (
            <>
                <button onClick={incrementCounter}>+</button>
                {counter}

                <Books addBook={memoizedAddBook}/>
            </>
        )
    },
}


type BooksPropsType = {

    addBook:()=>void
}
const Books: FC<BooksPropsType> = memo(({addBook}) => {
    console.log('Books')
    return (
        <div>
            <button onClick={()=>addBook()}>Add user</button>
            {
             /*   books.map((book, i) => (
                    <div key={i}>{book}</div>
                ))*/
            }
        </div>
    )
})