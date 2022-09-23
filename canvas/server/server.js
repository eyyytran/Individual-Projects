const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const app = express()
const httpServer = http.createServer(app)
const socket = require('socket.io')
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
    },
})
const PORT = 4000

const onConnection = socket => {
    console.log(socket.id)
    socket.on('canvas-data', data => {
        socket.broadcast.emit('canvas', data)
    })
    socket.on('connect_error', err => {
        console.log(`connect_error due to ${err.message}`)
    })
}

io.on('connection', onConnection)

httpServer.listen(PORT, () => console.log(`listening on Port ${PORT}`))
