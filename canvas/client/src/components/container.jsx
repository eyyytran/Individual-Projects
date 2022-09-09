import { useState } from 'react'
import Board from './board'
import './container.css'

const Container = () => {
    const [color, setColor] = useState('#000000')
    const [size, setSize] = useState('5')

    return (
        <div className='container'>
            <h1>Container</h1>
            <div className='color-picker-container'>
                <input
                    type='color'
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
            </div>
            <div className='brushsize-container'>
                Select Brush Size : &nbsp;
                <select value={size} onChange={e => setSize(e.target.value)}>
                    <option> 5 </option>
                    <option> 10 </option>
                    <option> 15 </option>
                    <option> 20 </option>
                    <option> 25 </option>
                    <option> 30 </option>
                </select>
            </div>
            <div className='board-container'>
                <Board color={color} size={size} />
            </div>
        </div>
    )
}

export default Container
