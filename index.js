

const express = require("express")
require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 8000

app.get("/", (req,res)=> {
    res.send("Hello from the backend")
})

app.get("/about", (req,res)=> {
    res.send("welcome to the about page")
})


app.listen(PORT, ()=> {
    console.log(`listening at PORT ${PORT}`)
})