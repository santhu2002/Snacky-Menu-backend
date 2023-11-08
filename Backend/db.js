const mongoose = require('mongoose');
const dotenv = require("dotenv");



dotenv.config({
    path: "./.env",
  });

// const mongoURI = "mongodb://localhost:27017/Restaraunt"
const mongoURI = process.env.mongoURI


const connectToMongo =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo succcessfully")
    })
}

module.exports = connectToMongo