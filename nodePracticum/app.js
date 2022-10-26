const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head></head>')
    res.write('</html>')
})

server.listen(3000)
