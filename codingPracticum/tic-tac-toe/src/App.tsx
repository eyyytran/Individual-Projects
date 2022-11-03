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
            <header className='text-xl font-bold'>Let's Play Tic-Tac-Toe</header>
            <div className='flex-1 flex flex-col sm:flex-row'>
                <div className='flex-1 flex justify-center items-center bg-indigo-100'>
                    <Board />
                </div>
                <div className='order-first sm:w-32 bg-purple-200'>{game.state.player}</div>
            </div>
        </div>
    )
}

export default App
