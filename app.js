const mongoose = require('mongoose')
const dotenv= require('dotenv')
const express = require('express')
dotenv.config()
const dbConnection = require('./config/dbConnection')
const userRouter = require('./routers/userRouter')
const app = express()
const port = process.env.PORT||3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',userRouter)

dbConnection().then(()=>{
    app.listen(port,()=>{
        console.log(`server running at${port}`);
    })
})

