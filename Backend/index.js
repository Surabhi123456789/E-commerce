const express = require('express')
const cors= require('cors')
const  cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router= require('./Routes')


const app= express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api",router)

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connected to db")
        console.log("server is running")
    })

})
