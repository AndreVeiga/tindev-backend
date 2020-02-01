const express = require('express')
const DevController = require('./controllers/DevController')
const LikesController = require('./controllers/LikeController')
const DislikesController = require('./controllers/DislikeCintroller')

const routes = express.Router()

routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikesController.store)
routes.post('/devs/:devId/dislikes', DislikesController.store)

routes.post('/test/login', (req,res) => {
    const user = {
        name: 'Cláudio Yago Brito',
        type: 'developer',
        email: 'claudioyagobrito@maker.com.br',
        projetos: [
            'Projeto A',
            'Projeto B',
            'Projeto C'
        ]
    }

    return res.json(user)
})


module.exports = routes