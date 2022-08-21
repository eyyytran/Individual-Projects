const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})
