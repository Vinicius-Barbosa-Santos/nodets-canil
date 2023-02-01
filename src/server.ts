import mainRoutes from './routes/index'
import mustache from 'mustache-express'
import express, {Request, Response} from 'express'
import path from 'path'

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)
server.use((req : Request, res : Response) => {
    res.render('pages/404')
})

server.listen(3000)