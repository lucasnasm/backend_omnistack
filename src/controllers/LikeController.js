const Dev = require('../models/Dev')

module.exports = {
    async store(req,res){
        
        const { user } = req.headers
        const { devId } = req.params
        

        const loggedDev = await Dev.findById(user)

        //alvo do like
        const targetDev = await Dev.findById(devId)

        if(!targetDev){
            return res.status(400).json({error: 'Dev not exists'})
        }

        //verifica se alvo do like deu like no loggeddev
        if(targetDev.likes.includes(loggedDev._id)){
            console.log("DEU MATCH")
        }

        loggedDev.likes.push(targetDev._id)

        await loggedDev.save()

        return res.json(loggedDev)
    }
}