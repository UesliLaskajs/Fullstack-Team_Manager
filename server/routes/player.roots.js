const playerControllers=require("../controllers/player.controller")


module.exports=(app)=>{
    app.get("/players/list",playerControllers.getAllPlayers)
    app.get("/playes/:id",playerControllers.getOnePlayer)
    app.post("/players/addplayer",playerControllers.addPlayer)
    app.patch("/status/game/:id",playerControllers.updatePlayer)
    app.delete("/players/delete/:id",playerControllers.deletePlayer)
}   