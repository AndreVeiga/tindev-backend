const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const port = process.env.PORT || 3333

mongoose.connect('mongodb+srv://machadoandre:machadoandre@cluster0-osefg.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console
            .log('Servidor rodando na porta localhost/3333'))