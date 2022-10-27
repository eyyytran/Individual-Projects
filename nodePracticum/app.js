const express = require('express')
const http = require('http')
const app = express()

const PORT = 3000

console.log('bye world')

const server = http
    .createServer({}, app)
    .listen(PORT, () => console.log(`Listening on Port ${PORT}`))
