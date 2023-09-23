const express=require('express')
const app=express();
const cors=require('cors')
const port=8000


app.use(cors());
app.use(express.json());                          
app.use(express.urlencoded({ extended: true }));  

require("./config/mongoose.config");
require("./routes/player.roots")(app);


app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})

