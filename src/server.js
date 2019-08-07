//carregar variaveis ambiente - não expor minhas configs do db no git
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
dotenv.config()
//import de arquivo na mesma pasta
const routes = require('./routes')

//instancia do express
const server = express();

//conexão com o mongodb
mongoose.connect(process.env.DB_CON,{
    useNewUrlParser:true
})

server.use(cors())
//fazendo com que o express entenda json na req
server.use(express.json())
//carregando rotas
server.use(routes)

//ouvindo na porta 3000
server.listen(process.env.PORT)