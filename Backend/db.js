const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/Restaraunt"

const connectToMongo =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo succcessfully")
    })
}

module.exports = connectToMongo