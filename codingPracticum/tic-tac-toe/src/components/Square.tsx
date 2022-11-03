import { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import gameSlice from '../store/gameSlice'

interface Props {
    squareNumber: number
}

const Square: FC<Props> = ({ squareNumber }) => {
    const [symbol, setSymbol] = useState<string>('')

    const game = {
        state: useSelector((state: RootState) => state.game),
        action: gameSlice.actions,
    }

    const dispatch = useDispatch()

    const handleClick = () => {
        game.state.player === 'A' ? setSymbol('X') : setSymbol('O')
        dispatch(game.action.changePlayer())
    }

    return (
        <div
            className={`grid place-items-center text-[60px] ${
                squareNumber % 2 === 0 ? 'bg-green-300' : 'bg-violet-300'
            }`}
            onClick={handleClick}
        >
            {symbol}
        </div>
    )
}

export default Square
