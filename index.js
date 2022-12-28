const server = require('./src/app')
const port = process.env.PORT || 4001
server.listen(port, () => {
    console.log('server  iniciado', port)
})