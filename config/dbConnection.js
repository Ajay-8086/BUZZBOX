const mongoose = require('mongoose')
// Database connection

const connectDB = async()=>{
    try {
        const con =await mongoose.connect( process.env.URI)
        console.log('databassse connected success fully');
    } catch (error) {
        console.log('Error connecting the DB');
    }
}

module.exports = connectDB