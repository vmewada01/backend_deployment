

const express = require("express")
require("dotenv").config()
const {connection}= require("./config/db")
const app = express()

const PORT = process.env.PORT || 8000

app.get("/", (req,res)=> {
    res.send("Hello from the backend")
})

app.get("/about", (req,res)=> {
    res.send("welcome to the about page")
})


app.listen(PORT, async()=> {
    try{
    await connection
    console.log('connected db')
    }catch(err){
     console.log(err)
    }
    console.log(`listening at PORT ${PORT}`)
})