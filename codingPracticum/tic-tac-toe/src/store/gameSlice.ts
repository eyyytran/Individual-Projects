import { createSlice } from '@reduxjs/toolkit'
import { isReadable } from 'stream'

interface GameState {
    turn: string
    playerASelections: Array<number>
    playerBSelections: Array<number>
    isWon: boolean
}

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

const checkWinningConditions = (playerSelections: number[]) => {
    return winningConditions.some(winningCondition => {
        let includesAll = true
        winningCondition.forEach(square => {
            if (!playerSelections.includes(square)) includesAll = false
        })
        return includesAll
    })
}

const initialState: GameState = {
    turn: 'A',
    playerASelections: [],
    playerBSelections: [],
    isWon: false,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changePlayer: state => {
            state.turn = state.turn === 'A' ? 'B' : 'A'
        },
        checkifWinner: state => {
            state.isWon = checkWinningConditions(
                state.turn === 'A' ? state.playerASelections : state.playerBSelections
            )
        },
        updateBoard: (state, action) => {
            const square = action.payload
            state.turn === 'A'
                ? state.playerASelections.push(square)
                : state.playerBSelections.push(square)
        },
    },
})

export default gameSlice
