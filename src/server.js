const express = require('express')

//instancia do express
const server = express();

//metodo get com arrow function
server.get('/', (req,res) => {
  return res.json({message: `OLá ${req.query.name}`})
})




//ouvindo na porta 3000
server.listen(3000)