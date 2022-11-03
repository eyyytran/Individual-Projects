import { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import gameSlice from '../store/gameSlice'

interface Props {
    squareNumber: number
}

const Square: FC<Props> = ({ squareNumber }) => {
    const [symbol, setSymbol] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    const game = {
        state: useSelector((state: RootState) => state.game),
        action: gameSlice.actions,
    }

    const dispatch = useDispatch()

    const handleClick = () => {
        if (isDisabled) return
        game.state.turn === 'A' ? setSymbol('X') : setSymbol('O')
        dispatch(game.action.updateBoard(squareNumber))
        dispatch(game.action.checkifWinner())
        dispatch(game.action.changePlayer())
        setIsDisabled(true)
    }

    useEffect(() => {
        if (game.state.isWon) setIsDisabled(true)
    }, [game.state.isWon])

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
