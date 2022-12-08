const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://vishal0102:vishal0102@cluster0.9uryho2.mongodb.net/assingment",{
    useNewUrlParser:true,
})
.then(console.log("MongoDb is connected"))
.catch(err=>{console.log(err)})

app.use('/',route)

app.listen( process.env.PORT || 3000,()=>{
     console.log("Server running on "+ (process.env.PORT || 3000))
})