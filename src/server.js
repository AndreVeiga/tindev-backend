const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

mongoose.connect('mongodb+srv://machadoandre:machadoandre@cluster0-osefg.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const routes = require('./routes')

const server = express()

server.use(cors())

server.use(express.json())

server.use(routes)

server.listen(3333, () => console
            .log('Servidor rodando na porta localhost/3333'))