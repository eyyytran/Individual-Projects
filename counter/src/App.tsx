import React, { FC, useState } from 'react'
import './App.css'

const App: FC = () => {
    const [counter, setCounter] = useState<number>(0)

    const handleChange = (): void => {
        setCounter(counter + 1)
    }

    const resetCounter = (): void => {
        setCounter(0)
    }

    return (
        <div className='App'>
            <div className='counter'>{counter}</div>
            <button type='submit' onClick={handleChange}>
                Add
            </button>
            <button type='submit' onClick={resetCounter}>
                Reset
            </button>
        </div>
    )
}

export default App
