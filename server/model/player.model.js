const mongoose =require("mongoose")

const PlayerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a player's name"],
        minlength:[2,"Name must be at least 3 characters"]
    },
    position:{
        type:String,
        required:[true,"Please enter a position"],
        minlength:[3,"Position must be at least 3 characters"]
    },
    game1_status:{
        type:String
    },
    game2_status:{
        type:String
    },
    game3_status:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Player",PlayerSchema)

