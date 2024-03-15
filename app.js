const express = require('express')
const dotenv= require('dotenv')
const session = require('express-session')
dotenv.config()
const dbConnection = require('./config/dbConnection')
const userRouter = require('./routers/userRouter')

//Express app setup
const app = express()
const port = process.env.PORT||3000

//Middleware for data passing and session
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
}))

// user router 
app.use('/',userRouter)

//connecting to database
dbConnection().then(()=>{
    app.listen(port,()=>{
        console.log(`server running at${port}`);
    })
})

