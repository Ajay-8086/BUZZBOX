const mongoose = require('mongoose')
// Database connection

const connectDB = async()=>{
    try {
        await mongoose.connect( process.env.URI)
        console.log('database connected success fully');
    } catch (error) {
        console.log('Error connecting the DB');
    }
}

module.exports = connectDB