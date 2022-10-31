const express = require('express')
const http = require('http')
const app = express()

const PORT = 3000

//dear future Andrea, order matters with this middleware omg why
app.use('/users', (req, res, next) => {
    console.log('Middleware 2')
    res.send('<h1>Dummy Page</h1>')
})

app.use('/', (req, res, next) => {
    console.log('Middleware 1')
    res.send('<h1>Hello World</h1>')
})

const server = http
    .createServer({}, app)
    .listen(PORT, () => console.log(`Listening on Port ${PORT}`))
