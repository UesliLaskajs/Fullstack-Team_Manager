const player=require("../model/player.model")


module.exports.getAllPlayers=(req,res)=>{
    player.find()
    .then((allPlayers)=>{
        res.json(allPlayers)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports.getOnePlayer=(req,res)=>{
    player.findOne({_id:req.params.id})
    .then((onePlayer)=>{
        res.json(onePlayer)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports.addPlayer=(req,res)=>{
    player.create(req.body)
    .then((onePlayer)=>{
        res.json(onePlayer)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports.updatePlayer=(req,res)=>{
    player.updateOne({_id:req.params.id},req.body,{new:true})
    .then((updatedPlayer)=>{
        res.json(updatedPlayer)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports.deletePlayer=(req,res)=>{
    player.deleteOne({_id:req.params.id})
    .then((deletedPlayer)=>{
        res.json(deletedPlayer)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
    }


