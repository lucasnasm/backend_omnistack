const express = require('express')

//instancia do express
const server = express();

//metodo get com arrow function
server.get('/', (req,res) => {
  return res.send("Hello World")
})




//ouvindo na porta 3000
server.listen(3000)