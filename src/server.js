//carregar variaveis ambiente - não expor minhas configs do db no git
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
dotenv.config()
//import de arquivo na mesma pasta
const routes = require('./routes')

//instancia do express
const server = express();


//fazendo com que o express entenda json na req
server.use(express.json())

//conexão com o mongodb
mongoose.connect(process.env.DB_CON,{useNewUrlParser:true})

//carregando rotas
server.use(routes)

//ouvindo na porta 3000
server.listen(process.env.PORT)