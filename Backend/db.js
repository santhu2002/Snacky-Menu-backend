const mongoose = require('mongoose');


// const mongoURI = "mongodb://localhost:27017/Restaraunt"
const mongoURI = "mongodb+srv://Santhosh:root@cluster0.xvefb4s.mongodb.net/"

const connectToMongo =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo succcessfully")
    })
}

module.exports = connectToMongo