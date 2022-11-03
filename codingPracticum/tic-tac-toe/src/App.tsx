import { useSelector } from 'react-redux'
import { RootState } from './store'
import Board from './components/Board'
import gameSlice from './store/gameSlice'

function App() {
    const game = {
        state: useSelector((state: RootState) => state.game),
        action: gameSlice.actions,
    }

    return (
        <div className='min-h-screen flex flex-col font-sans'>
            <header className='h-[60px] text-4xl font-bold text-center bg'>
                <h1>Let's Play Tic-Tac-Toe</h1>
            </header>
            <div className='flex-1 flex flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col justify-center items-center bg-indigo-100'>
                    {game.state.isWon || game.state.isDraw ? 'Game Over' : ''}
                    <Board />
                </div>
            </div>
        </div>
    )
}

export default App
