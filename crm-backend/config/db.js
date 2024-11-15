const mongoose = require('mongoose')

const connectDB = async (req) => {
    return mongoose.connect("mongodb+srv://Utkarsh:utkarsh123@cluster0.1es1e.mongodb.net/",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("Database Connection Established...")).catch((error)=>console.log(`Database Connection Failed \n Error : ${error}`))
}

module.exports = connectDB