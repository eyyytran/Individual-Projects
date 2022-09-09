const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)
const PORT = 4000

const onConnection = socket => {
    console.log('User Online')
    socket.on('canvas-data', data => socket.broadcast.emit('drawing', data))
}

io.on('connection', onConnection)

server.listen(PORT, () => console.log(`listening on Port ${PORT}`))
