import { createSlice } from '@reduxjs/toolkit'

interface GameState {
    player: string
}

const initialState: GameState = {
    player: 'A',
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changePlayer: state => {
            state.player = state.player === 'A' ? 'B' : 'A'
        },
        checkWinner: state => {},
    },
})

export default gameSlice
