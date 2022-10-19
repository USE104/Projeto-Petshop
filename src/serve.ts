//servidor
import  express  from 'express'

//variavel de ambiente (PORT)
import dotenv from 'dotenv'

//mustache é o HTML
import mustache from 'mustache-express'

//O path é para usar a pasta public
import path, {dirname} from 'path'

//importando o arquivo index.ts

import mainRouters from './routes/index'


dotenv.config()

// criando a variavel server para receber o express 
const server = express()

// configurações do  mustache-express

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())


//diretorio da pasta public
server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRouters)

//página não encontrada
server.use((req,res) =>{
    res.send("Puxa, essa página não existe em nosso site. Que tal tentrar digita com outro nome ?")
})

//escutando a porta do servidor
server.listen(process.env.PORT)

