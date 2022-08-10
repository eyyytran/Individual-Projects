import React, { FC, useState } from 'react'
import './App.css'

const App: FC = () => {
    const [counter, setCounter] = useState<number>(0)

    const handleChange = () => {
        setCounter(counter + 1)
    }

    return (
        <div className='App'>
            <div className='counter'>{counter}</div>
            <button type='submit' onClick={handleChange}>
                Click
            </button>
        </div>
    )
}

export default App
