import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import './board.css'

const Board = props => {
    let timeout
    const socket = io.connect('http://localhost:3000')
    const [drawing, setDrawing] = useState(false)

    const canvasRef = useRef(null)
    const ctxRef = useRef(null)

    const startDraw = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(offsetX, offsetY)
        setDrawing(true)
    }

    const stopDraw = () => {
        ctxRef.current.closePath()
        setDrawing(false)
    }

    const prepareData = data => {
        const image = new Image()
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        image.onload(() => {
            ctx.drawImage(image)
        })
        image.src = data
    }

    const draw = ({ nativeEvent }) => {
        const canvas = canvasRef.current
        if (!drawing) return
        const { offsetX, offsetY } = nativeEvent
        ctxRef.current.lineTo(offsetX, offsetY)
        ctxRef.current.stroke()
        const ctx = canvas.getContext('2d')
        ctx.strokeStyle = props?.color || 'blue'
        ctx.lineWidth = props?.size || '20'
        if (timeout !== undefined) clearTimeout(timeout)
        timeout = setTimeout(() => {
            let base64ImageData = canvas.toDataURL('image/png')
        }, 1000)
    }

    // const clear = () => {
    //     ctxRef.current.clearRect(
    //         0,
    //         0,
    //         canvasRef.current.width,
    //         canvasRef.current.height
    //     )
    // }

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
        const ctx = canvas.getContext('2d')
        ctx.scale(2, 2)
        ctx.lineCap = 'round'
        ctx.strokeStyle = props?.color || 'blue'
        ctx.lineWidth = props?.size || '20'
        ctxRef.current = ctx
    }, [])

    socket.on('connect', () => {
        console.log(socket.id)
    })

    return (
        <canvas
            className='board'
            ref={canvasRef}
            onMouseDown={startDraw}
            onMouseUp={stopDraw}
            onMouseMove={draw}
        >
            <div className='fallback'>
                Canvas is not supported on this browser
            </div>
        </canvas>
    )
}

export default Board
