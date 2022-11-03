import Square from './Square'

const Board = () => {
    const boardSize = 9
    return (
        <div className='w-[500px] h-[500px] bg-orange-100 grid grid-cols-3 grid-rows-3'>
            {[...Array(boardSize)].map((value: undefined, index) => (
                <Square squareNumber={index + 1} />
            ))}
        </div>
    )
}

export default Board
